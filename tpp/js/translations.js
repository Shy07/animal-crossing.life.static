
const PATTERNS = {
  en: {
    'patterns.all': 'All',
    'patterns.large-spike': 'Large spike',
    'patterns.small-spike': 'Small spike',
    'patterns.fluctuating': 'Fluctuating',
    'patterns.decreasing': 'Decreasing'
  },
  zhCNS: {
    'patterns.all': '综合',
    'patterns.large-spike': '大涨型',
    'patterns.small-spike': '小涨型',
    'patterns.fluctuating': '波动型',
    'patterns.decreasing': '递减型'
  }
}

let patterns = PATTERNS.zhCNS
try {
  const lang = $('html').attr('lang')
  const pat = PATTERNS[lang]
  if (pat) patterns = pat
} catch (err) {}

window.i18next = {
  t: function (val) {
    return patterns[val]
  }
}
