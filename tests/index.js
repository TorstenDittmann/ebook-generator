const epubchecker = require('epubchecker')
const EBook = require('../index')
const template = ['epub3', 'modern', 'scifi', 'romance']
const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wkJEAwfEYcP/gAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAO2SURBVFjD7dhbU1tVGIDhd2cnOyEnyKEBEiKHcCwQCARhOrRWK7XOWB1765X/w0v/kha1VBtICzQUGIQCAgEkzRkCgRZI9t5e6QxDtUUJ0xn5btfMmmfWd1hrlvBV8EuVdyg0vGNxCboEXYJKHdpSbCqIGjSigM6ox+5x0uhvpqPHj91p59uvv7k4kNago7zahtPjwu6yU+V1U+urw/OeF2uFlUQsfjEnJIgabDUO2gf8tPd0Ul3jwWwxYTSZMJQZ0Gq1qIqKIAilB4mSiLeznmuf3KArGMDpcqLT6RAE4QRAFVQkSSotSJREfH2tfPT5EB0BP9ZyKxrN6/tEVVUKxULpQKIk0hBsYejeHToDfkxm89+mRFEU8nt51pZWSwP6M00f3v2Yju5/xhQKBbYzWWYjM4S+e3j+IEHU4PJVc/PuLbqC3Zgtr8coisLB/gGb0Q2mHj9lJhQhHU2eP8h8xcrA7UG6+3qxWK2nMKqqcnR4SDKRZH7mV6bDEaKzKxzmXp7/YNQadLS+306gvxebw3aqgBVZYWd7m+dzC0TGJlmZXiSf2kU+ls9/UguihqpmD33X+3HXuBFF8cS6LMukEikmRp/weDhE8rfYmSBnBhltJgKDQVraW9EbDCfWisUiyXiC8Mgo4e8fsb2ZQZWV0t1loiTSFGyjZyBIua3iRN0UCgVebMUYexBifHiMXGz7X2PeGuSsq6TvRj+e2hq0Wu0JzGZ0g9APPzP54xPyiVzpb3utQUdjVwuNrU1IkoQsyyiKgizLpJMpxkZCTAyH2U/tXczzw+y04GtrwlBWRjaTJZfdIbeTY38vT3R5jdnRKQqvjpFMeo4Pjk41AnCmFL4R5G70UumuIpfdYWNtndmJZ6wvrHF0cEjxuIi72cvgZzfJ7+4R+Wmc/dQekkmPzePgSk0lkkEiHo2RWo2/Vde9EdTY3oxeL7H8fInN1XXi6y/IxbIA1Pc2c+uL27R2XCWbTpOKJdl15WgJtOFtqMVoMmKxWliaX+RB+j4Hmfx/BzW0+LA7HQgaDXW+OhpaGhkfCaOqKtfvfEC1x40sF6mw2+i+1ovRZMRstbAV3WT+2RwudyXZZIbiUeF8UlZmLCOTSrOyuILD5aTNf5UKuw1FljGajExPTmFz2Gjv9tPU1kwiFudpaJyFiTn2Ejto9Trkgkzx8JxAv9x/yG42x++LG1Q1uBm69yl1vnoyqTSR8CTTjyLY3U6y6SyHL1+xPLtIfGnrrwI/67QWLj8bLkGXoP8b6A/Z2HSzxi9EDQAAAABJRU5ErkJggg=='

const check = async e => {
  const report = await epubchecker(`./tests/${e}.epub`, {
    includeWarnings: true,
    // do not check CSS and font files
    exclude: /\.(css|ttf|opf|woff|woff2)$/
  })
  console.log(report.checker)
}

const runTestOn = async (template) => {
  const ebook = new EBook({
    cover: {
      extension: image.substring('data:image/'.length, image.indexOf(';base64')),
      type: image.substring('data:'.length, image.indexOf(';base64')),
      data: image.replace(/^data:image.+;base64,/, '')
    }
  },
  [
    {
      title: 'About the author',
      data: '<h2>Charles Lutwidge Dodgson</h2>'
    },
    {
      title: 'Lorem ipsum dolor',
      data: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
    }
  ])
  ebook.render({ use: template })
  ebook.save(`./tests/${template}.epub`)
  setTimeout(check, 2500, template)
}

template.forEach(e => runTestOn(e))
