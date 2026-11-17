// ============================================================
// 內容設定檔：聯絡資訊、影片連結、各分類相簿都在這裡改
// ============================================================

// 網站設定：填了就啟用，留空就維持原型模式（設定方式見 README.md）
window.SITE = {
  // 內容試算表：Google 試算表的網址（要設成「知道連結的任何人都能檢視」）
  // 試算表裡填的聯絡資訊與影片連結，會蓋過下面 CONTACT、VIDEOS 的內容
  sheet: '',
  // 詢問表單：Web3Forms 的 Access Key，或 Formspree 的表單網址（https://formspree.io/f/...）
  form: ''
};

// 聯絡資訊：填入後每一頁的聯絡區都會顯示；留空會顯示「待補」
window.CONTACT = {
  email: '',
  line: '',
  instagram: '',
  phone: ''
};

// 動態作品：貼上 YouTube 連結即可（watch、youtu.be、shorts 都可以）
// 例：{ title: '美福大飯店｜婚禮精華', url: 'https://youtu.be/xxxxxxxxxxx' }
window.VIDEOS = {
  activity: [],
  wedding: [],
  space: []
};

// ---------- 照片來源（lovemore.smugmug.com），格式：[imageKey, hash] ----------
(function () {
  var S = window.SETS;
  function add(name, o, items) { S[name] = { base: 'photos', o: o, items: items }; }

  // 既有相簿的直橫方向（L 橫 / P 直）
  S.church.o = 'LLLLLLLLL';
  S.bridal.o = 'PPLLPPPPP';
  S.newborn.o = 'PLPPPPPPP';
  S.concert.o = 'LLLLLPPLL';

  add('zhuazhou', 'PLLLLLLLLLLLLL', [
    ['i-tPV9Mg3', 'KHBZ96qZpPXrC93LcmfT2XZnbhfPTLdqqfJqtccT9'],
    ['i-TxgkPJD', 'K9Js6LvgKSpjzKzcNxSbpgGNbmbJH3WB45pGhfJcq'],
    ['i-TBqTnxd', 'MdhwwvQX53W5xZ235CQsQ4sthsfBHCbq4zTJcwNpb'],
    ['i-vzsztWj', 'MJxkHQzfbPBtdp2G7p7cfRnSXNBZDmLcNxFK8sWhN'],
    ['i-hHhkVXh', 'K7Xg25MdKXKVSQBLJ8pfs6WQFShHkZpWzpP9XxSLf'],
    ['i-rJRfGFR', 'LzpFSKZbbzmhKhQVCXbRmht5S5zCxbtJwC7sTx6XZ'],
    ['i-sWZvdXB', 'LFMzqnQKCK2tk9tn5FwkmpbzqNVZp686kw9JzwXLj'],
    ['i-4L3XkgS', 'MKcd7ZRC749W6qDZKRkdjpb8dkmh9nq97CFjfm2nr'],
    ['i-KChppZK', 'MLB5c8r65cmBtqQq5FG5K9dhKcW4TJKxSPwM7mR9c'],
    ['i-WjdfP7t', 'LPqxLDg67Pq7v3VV3fcCL9ddjSzwqNsJ3TF74cpJx'],
    ['i-NnNF8RW', 'NJ9BhqXS8BDW4kBw4VvHQQKB2dqMZbdpX688D42np'],
    ['i-dQJ3tMV', 'MKvFMwD59nrJg8DnvnZgcXSXQXXf6zJcpKVNzC38S'],
    ['i-xgGqmtr', 'L9FZMFbRtrwfLnBbJX8qC8HQ6zvQQxcvr9G5k4PPt'],
    ['i-2WrrhLg', 'MdsR38SgmCgqcM3jpgQZzDqwMcnpjTBSxq5w26bDr']
  ]);
  add('truku', 'LLLLLLLLLLLLPL', [
    ['i-qFsMqf5', 'MGrrxqLfvB4VjB6TKwKK2G7vpRBmLqWStbZ97c5n3'],
    ['i-ZKwqGSS', 'KJ22nq4vgNtzsP8dGrcgmMfg7xswngkTdMrHWcgJb'],
    ['i-46rv77V', 'NFNXmPtNKNvqRt7rb9PvHhsDwNXds52wJxrsRKGxg'],
    ['i-PLJPhTr', 'LCwrMS3WJPT4jndRQ4bKtrxbgfSr9KRx6zRNdtvjj'],
    ['i-qDv824x', 'NJC2frj8XNZwXXGgLGfvb7fGPnxxVzDtN8R3bJzkx'],
    ['i-HWGSSgv', 'KtHCwXXhDhsWcjXGCtb7RmsjMsCnXShF7ztBp498d'],
    ['i-fndT8HC', 'KhsWdW3d5QVqM6TjfpKKPkvSxNrPkNpJ9J8BG6Hjv'],
    ['i-pb6FKM3', 'MSN5fRPpq3TXBfwmKTrkzX5LV7NJgh3bhkq4w68Ww'],
    ['i-j2hwDr6', 'K4Zxgc85jh7L6vQx76Dt79WrgcDNxdBcQMs2QZz2h'],
    ['i-CjzD76d', 'LgvrTNtXzqzC92xVnkzDmLjfPXjXP7cBP4MrBkKMq'],
    ['i-hk7CPQt', 'K7R67FhQCDBw2WdLxcm6p7k6RQxZDjGf3JqRNCWgq'],
    ['i-9GZd66v', 'LKRX8w4rc8qRVnpD8Xt9rRz2ZMt7cS7b4M59vqDsb'],
    ['i-24nv2Rb', 'K5r42XJFS8p6792WPK5n9cH4ZWKdzScS4pLRtW38S'],
    ['i-BVHpWSM', 'MbVdgjR3PSKbpMS5J5jjhq4shcXbMsw9MS8wbnqrP']
  ]);
  add('aiacademy', 'LLLLLLLLLLLLLL', [
    ['i-c5dnL2q', 'NhmhdpLVDsmhtLfz3J4z8NVx9RbjfQShV6qQ4zN2T'],
    ['i-LtnRb2j', 'LcQCWvbrccNQk3Sd39rGD9WHv3DsXFVm7kGTtTNRd'],
    ['i-J3Q6NtQ', 'KGwQSfSgCH4NbDL8j6NgMjRxMQkPsSHtr9SxL4FqM'],
    ['i-4ZtRPsQ', 'KV3F3kNZRQWQqVqqpK2nzdbpxCXPMHpsSxC7bkXG4'],
    ['i-CVWtHgh', 'K9jGv8BLZcGpmP9Mfd2jt8hMPCpRkH63FDxcCZtvQ'],
    ['i-DN9MmJ3', 'LXbt9wLPGrs6xb2wFLn9GWPtXwDRM3gPDwB9hdWzg'],
    ['i-hfjr825', 'LN4CBk6JxmQWFNRRftwprJgqRGm69JprkJHF2p2ND'],
    ['i-JZCqJ7V', 'NWhccFSD4DrDRfdqcXLsp6pvRxTxWbbB4hZpFFr97'],
    ['i-Zm444wg', 'M7B2KQGV9vdFcFQLn5RQHJwqmS8KWvGtBMhk8T4SV'],
    ['i-nVSpBQb', 'Lv95fG4JscjhT5QJZBGqG3GVpBR4QQVrtwfFmscPL']
  ]);
  add('jingyan', 'LLLLPLLLLLLLPL', [
    ['i-cWj7dhX', 'Kw3MrCx6jPv6HRBtmmZ6X7qbhRGCW3HdjFCm7xmHh'],
    ['i-tvJcNtz', 'KkLwdmjDk3g3T3TVDHj3vJjFnnzzhsJfzXvKh2N4r'],
    ['i-zMWrwR2', 'NJVRQqJ4jh9F56K7xzHZ6Q8PKwFmbqHWF2rBXJQDt'],
    ['i-sKTv3wC', 'MgsDDNmM6hP5vfFZDC5dxhmGz5RTHZrxHKvnFqmRp'],
    ['i-7gsvrbq', 'MVj2pQ2pftk5SNcnnJVcMnDq84sDQ2NmqMsj3ZLMj'],
    ['i-2dPtZx8', 'NKQnr4dqWM85XwB3QChTw7MKg4PJj9J27G5BkFC3V'],
    ['i-jLxXsDJ', 'K2tWqpvbsJCfnCxm2Xmf9hJDMx9JrnwF3bgFzD4h8'],
    ['i-MH8XcVD', 'NQRzLJGghSD8sRxMnxcZJVQj898Zqr4vW4qsT9hkf'],
    ['i-ZCh8z3m', 'MkPSsqQsrd2sjwwPFDsj9CtSsjLd5BMwgGFZvJkQn'],
    ['i-hSK39hB', 'KPgL8pdFbSqbG7nSPzMKJ6rSFFdHr6h6263vczFcV'],
    ['i-HkzhcwR', 'KtDKcQcbmKsmkTx4RPKhdVrHqWxHLrXkZzc2TN8vd'],
    ['i-RWmPrFv', 'KN8rCCbd2jJcP26HrczMPzkvJrR2Hx7ktcbLjGNBB'],
    ['i-xPKQ5pn', 'NRZWPfpkLZ8qmXLHJjRZ6Bb2R8D8Xt8R6mDqtB3QH'],
    ['i-5DLxg3V', 'NBDWdvVr2fzxnWPZg2PMD9cmZZFXbDxXBbfT6pj96']
  ]);
  add('newborn2', 'PPPLPLLLPLLLL', [
    ['i-hWhbhvP', 'KhK6Z7G2ZHdkb6vMtb4R98Z2wNvSJzRvxTvWCGQW8'],
    ['i-86DGLK7', 'MhTsJghB9VrdppvcS9VgfFrwqKdgt8LgsSJJ7kRn2'],
    ['i-QjrTBKV', 'MkzMPFmq5WTBmRPMT9hT4WhNSbkJx34TDDVMNtVLh'],
    ['i-6VLLW6V', 'Lzq7t6XSsjRtLGpR2S5BjW46mbXC78xd72bRzXtrV'],
    ['i-gb75RVs', 'KbMXwf9vrVH2H8K6RmQkfmqtWXqJTs2vX8gGNdB3H'],
    ['i-KfV8TFp', 'NgqT5DGphVqFvngkvjRG96xPJBXPzXnxqv7tnMKS8'],
    ['i-hpQv53f', 'LCMQvtgMJC7Xb6Cw8xbXFNXcrW62KG9c5wnBqPFtZ'],
    ['i-PLhj2nV', 'K6zD7v2MFKZg6FQh33hGvj6xQJMMp38m3vfkwr94p'],
    ['i-qZRDXHV', 'Mv7VQQRR3TgZ2NmcNPNrDtFFhbtWKZqHqMxsjmDDW'],
    ['i-p8Wm2x7', 'MtL6qrvSBLZSf5Zrj24t6XXPpjj9Cc57VvGSQSFPK'],
    ['i-s2jLtnc', 'KHht9Q9NXtZbWgT3bp4R38j345kngrZrhrVmQ2qm3'],
    ['i-rwDs49N', 'KbKK9ngs3tNzj5pkKsssVk2pxMwRtNs5d4xMWCVgt'],
    ['i-jBJH5Lf', 'LcGJCBbtpxTgCH9KDTHsXRb875gZF5XrXhgh7M3Px']
  ]);
  add('basf', 'LLLLLLLL', [
    ['i-KBM2Bjc', 'NTgPWMSPWDf2dz5kLJ6pJTLpWGFxr2fwSFSnfwFRb'],
    ['i-hkqjp66', 'L22TqdkK3rTMVbFkskhTPJBhHTwbkhxVk8c37Ngph'],
    ['i-Bw9BzbT', 'NQCKfZGHSjdQPQZbGGgThvSGk8PKDNkQPFNHn4wBh'],
    ['i-2NSbvP7', 'K38ddt85Zs9HS7S2fPhJJQCNN3j9kZ7KpKzhRhnKR'],
    ['i-ppqBgcs', 'LnSkGvtMKbv43ZnXwmZKKcd63z93xzRrS4jcQJXLr'],
    ['i-MbVR2bL', 'LKgLmGXtDFzvSPndGZXSkvsGkZnjkx4ckbZqtnCc9'],
    ['i-3htqRCV', 'KLjr5BDzjZHzVwgzmsSkpVRVNHWTPkTNvLPKg7mbv'],
    ['i-qdDvp8C', 'MPc4zQgJtx8ThKcFQfN6HrJbMvJmvj69jsHFgc5mZ']
  ]);
  add('jcpark', 'LLLLLLL', [
    ['i-MGsp3Cc', 'L4CQjmrK8dr5Z5RqgSrRvsR6rbbBkTwQc5LBjbqqW'],
    ['i-sxJQXDp', 'Lhz7XHzxCjWpMg8Hhs2XMqHDDHTMHRLSZczg2vFFR'],
    ['i-HHwqnPh', 'KXwxRd9sdXh4G5QWQQ5nKDvXLxF8qSPPs5TvtrXwq'],
    ['i-B4kr3wZ', 'KnTTj7JJ825qb6V5tpQbnHZSs6tf6CF7bQq29WSFX'],
    ['i-7pFbXrQ', 'L359VLDN5WWnCZKZzVxqsq47jFS5b2mB6rbbbLNND'],
    ['i-CbZDWRJ', 'KX5qRD3cKbFrLhbVdTxjx4x38TNKswKkdTmTcFhm9'],
    ['i-dd5jKhC', 'LmZ93qtP6cV5fxgzjj4r3MvqpgNQFtqxGZV6SnQZq']
  ]);
  add('product', 'LLLLLLL', [
    ['i-Wgwvdnp', 'MvD3tFgKcqx6494H4Mq8BGXFPcCgkgDzJwdVCKBzW'],
    ['i-r2jkPHg', 'K2tW9MF4RR7h2wzWzJDFL7VM2CMsBTkDr2D4pvKMF'],
    ['i-bLxTVtH', 'LqrZqsgjkzncJZ9ZF3J92Gj3j7wBzJ7GBMcXPtg2k'],
    ['i-r5chV5R', 'MXWbnWRF477dnMQwWWnRJBrR5tZzcsv3cqhJHmdjM'],
    ['i-gmmxn2x', 'NJVsGNCH3wWnCNzpS25XNKwctt8qGfCgwz85Rzjbq'],
    ['i-tPVrbFx', 'KhM5tRzsCgZNbGLvMk53k3M8wCZ4L6zgvvxGnnGXM'],
    ['i-p8H4Bm2', 'KwPwtcrcKBRFfJspKRCk8hPwsCVSvGg77X8ZkkswZ']
  ]);
  add('market', 'LLPLLLLLLLLL', [
    ['i-vdNtWpP', 'NPd9NwrWksCRr7jXWXjHjBWnLHgznDhPbqzdGcRVw'],
    ['i-Xwd4hSP', 'KWht7dngkPbvTdFbRtjhPJ7zzq5PhBcm35HVMHZSw'],
    ['i-K2T4WTg', 'KwNCZtxNnNckhnNMtT8f7hXp3ZXhzmpbBMt64JQs4'],
    ['i-MmHQJF4', 'MZH8rmctzKLKMrnKLN53M7wqxKgDKQzRXZfF27M6N'],
    ['i-K972cxm', 'L53mjthjZWWgzs2kmSBvn2LkmNrvgXDkC7hQCmMFm'],
    ['i-bQ5LBZQ', 'Nh9F8FsVQXMfNDQTDSFvDZRmbKfFb2Ctf2wTbFFGc'],
    ['i-MW7F27H', 'KjDJxwLQ4gZTZVGZ3TtBm9wF7FRhXn2mw55L6K9p3'],
    ['i-9Q6fhfK', 'M76sjH74w328RCKMtj39GVxHxggRPhRWKFzXKbj3k'],
    ['i-FSvzZbq', 'LsdqdLJNJqnfCLkf2zRZ2SCR2Sp2T73cJMTtCjKwW'],
    ['i-HdHrz4S', 'LFk8cjkT2mV26zTxJR8DnJcGC9VBf65kqM5k2fMBc'],
    ['i-LkX55FW', 'KKd9MBBSFVLQMwGFRJHZtwhk5WBK5PsrbWdhxRbsw'],
    ['i-v6WDtDB', 'KTP3Nw77jZnmzs7bSkj3ntR9XBDLh6xqwvNq9hmR2']
  ]);
  add('campaign', 'LLLLLLLLLLLL', [
    ['i-TqkrjVJ', 'L3jcbsZN3GDT96FbTWhjMk2QJqs7kPdxrGmDjVtwn'],
    ['i-53PfwC3', 'Mj9bm6FmMjj87VBC4ztC89nN7VSH6kQPzwRrJ6Rng'],
    ['i-W4Sjskg', 'KQ8SKQCD322sG3s9Hkpn9Zt4sXQBV8GWcfJh9pLMv'],
    ['i-k7hCRjq', 'NGWmT6sH4cxHcb8mNcnW3rjsgf5DBjfTQK6w246s3'],
    ['i-Zwtrkk2', 'MLNQ4nhL3HpZ52hWtSPcn7H3bDbFk2Mqz7dcRLW8f'],
    ['i-rj5g72w', 'KwKmdvT4kb6T5CSsRRTBfn3V5wLfpwXcbqk28wpND'],
    ['i-7QGRrVD', 'L68fv7Z5w9rpWhtqWkDN6dkLptx7h2GXFR9FNCxQF'],
    ['i-QrPzMTQ', 'NWjZXTMSMdVdpRZmqHfKsCC5q7gXSJtdDSZjZ4PbQ'],
    ['i-nLhc2Mg', 'MQkSgPCMHTfB2FNxBzBh8gmbsvpDpLN3jdFSC3jWr'],
    ['i-Bd5xZ2k', 'KmGxgHJWCXGM3RN7ZvnsX6tbJfhPVXS98t2V7J83K'],
    ['i-nf7vW8q', 'NWGw5s6xgnNQJ3XXCNqgxDCQbsdD7gttn9Pv2zNhz'],
    ['i-XFCJBSs', 'MkBL6p6XC9gJBQV2nh3rVZR4n3NWc3p3mz72b9gTT']
  ]);
  add('interview', 'LLLLLLLLLLLL', [
    ['i-TJWtzfJ', 'LDrrC23WqzthPrDHSMHPcVXDG48GPSfZD3NQFxnJ6'],
    ['i-SnvVx89', 'KKdhNWXKNbxqTSgwkw9tMrdFknVRQXVDJMzDSSsk7'],
    ['i-x7qJPKc', 'LxKKZZGsWhzt9bRpGbPLkzCCfv22htrMPNvQdW8JN'],
    ['i-QZnpM9q', 'KWR6BdRHwJ98TkhHTvfGgpr3n28bPgBF6R85sNHNz'],
    ['i-srPGhmJ', 'MKWVpRDDXHWXhdX52tr8c9CcM5CBXj63cQDmVjXSL'],
    ['i-Zrcpqbv', 'KT2f4wXsgzT4VtjjzL97WqQhcmPNmp98pt8wZgtrk'],
    ['i-Q8tmSWW', 'MFfsJBXgHhm83cBQBNpHQCBVT4nXfnJgdhpcBGGQM'],
    ['i-4HNnML6', 'M3SC37JsGPHGL6LnKzZ5KP2Qr72zddfmtVshtscbj'],
    ['i-qq6Fx2G', 'MXpsPsqNKHN8JHGSmWVds3m7nPXgmkz4rn4h5ggZn'],
    ['i-z8xSG3v', 'MTHznQDrLjFM9wqHNZx9rRq7HdJVTKpPFQkN953Rf'],
    ['i-tXm3DMm', 'LJDhzFRS5rMHnH9WCk2cXKdhjTD6LSqMH6PS56S8j'],
    ['i-5GP8mbR', 'LtT2FvJwtfx4Ddnqcn3dQQhBmfRtfffVGLWHDWQpB']
  ]);
})();

// ---------- 分類頁 ----------
// photos：要顯示的照片（"相簿:第幾張"），順序即版面順序
// href：相簿標題下方「看完整相簿」的連結；case 為 true 表示站內案例頁
var SM = 'https://lovemore.smugmug.com/';
window.CATS = {
  activity: {
    title: '活動紀錄', en: 'EVENT', video: true, page: 'activity.html',
    lead: '音樂會、派對、祭儀到論壇，記下現場的溫度與人的表情。',
    albums: [
      { t: '洄游音樂會', s: '臺北流行音樂中心', href: SM + 'Activity/20241124',
        photos: ['concert:1', 'concert:6', 'concert:0', 'concert:3', 'concert:5', 'concert:8'] },
      { t: '嫩嫩｜抓周派對', s: '', href: SM + 'Activity/20250111',
        photos: ['zhuazhou:1', 'zhuazhou:0', 'zhuazhou:3', 'zhuazhou:5', 'zhuazhou:7', 'zhuazhou:9'] },
      { t: '太魯閣族感恩年祭儀', s: '大安森林公園', href: SM + 'Activity/20251101-T',
        photos: ['truku:0', 'truku:12', 'truku:2', 'truku:4', 'truku:6', 'truku:9'] },
      { t: '台灣人工智慧年會', s: '百工百業用 AI', href: SM + 'Activity/20240927-0928',
        photos: ['aiacademy:0', 'aiacademy:2', 'aiacademy:4', 'aiacademy:6', 'aiacademy:8'] }
    ]
  },
  wedding: {
    title: '婚禮紀實', en: 'WEDDING', video: true, page: 'wedding.html',
    lead: '從早晨的準備到宴席散場，照著時間把一天收好。',
    albums: [
      { t: '美福大飯店', s: '早儀・證婚・午宴', href: 'meifu.html', case: true,
        photos: ['meifu:17', 'meifu:7', 'meifu:8', 'meifu:22', 'meifu:30', 'meifu:28', 'meifu:31'] },
      { t: '晶宴會館 御豐館', s: '晚宴', href: SM + 'Wedding/Wedding3',
        photos: ['jingyan:0', 'jingyan:4', 'jingyan:2', 'jingyan:5', 'jingyan:12', 'jingyan:8'] },
      { t: '教堂證婚', s: '小側拍', href: SM + 'Wedding/Church',
        photos: ['church:1', 'church:7', 'church:5', 'church:6', 'church:8'] },
      { t: '婚紗側拍', s: '', href: SM + 'Wedding/2023',
        photos: ['bridal:4', 'bridal:3', 'bridal:0', 'bridal:2', 'bridal:5', 'bridal:8'] }
    ]
  },
  portrait: {
    title: '人物拍攝', en: 'PORTRAIT', video: false, page: 'portrait.html',
    lead: '到府新生兒與家庭寫真，在熟悉的地方，留下這個階段的樣子。',
    albums: [
      { t: '到府新生兒寫真', s: '楒凡寶寶', href: SM + 'NnP/20250425',
        photos: ['newborn:1', 'newborn:3', 'newborn:0', 'newborn:4', 'newborn:6', 'newborn:8'] },
      { t: '到府新生兒寫真', s: '之甯寶寶', href: SM + 'NnP/202504',
        photos: ['newborn2:3', 'newborn2:0', 'newborn2:1', 'newborn2:5', 'newborn2:4', 'newborn2:7'] }
    ]
  },
  space: {
    title: '空間與商品', en: 'SPACE & PRODUCT', video: true, page: 'space.html',
    lead: '辦公空間、建案生活圈與商品，照實呈現光線與材質。',
    albums: [
      { t: '台灣巴斯夫', s: '辦公室公共區空間', href: SM + 'Businesscooperation/20250821-',
        photos: ['basf:0', 'basf:1', 'basf:2', 'basf:3', 'basf:5', 'basf:7'] },
      { t: '昭揚建築', s: '生活圈拍攝', href: SM + 'Businesscooperation/2025',
        photos: ['jcpark:0', 'jcpark:1', 'jcpark:2', 'jcpark:3', 'jcpark:5'] },
      { t: '商品', s: '', href: SM + 'Businesscooperation/Product',
        photos: ['product:0', 'product:1', 'product:2', 'product:3', 'product:4', 'product:6'] }
    ]
  },
  politics: {
    title: '政治活動', en: 'POLITICS', video: false, page: 'politics.html',
    lead: '拜票、競選活動與採訪側拍，跟著行程記錄第一線的現場。',
    albums: [
      { t: '市場拜票', s: '', href: SM + 'Politics/Marketcanvassing',
        photos: ['market:0', 'market:2', 'market:1', 'market:4', 'market:6', 'market:9'] },
      { t: '競選活動', s: '', href: SM + 'Politics/Electioncampaign',
        photos: ['campaign:0', 'campaign:2', 'campaign:4', 'campaign:6', 'campaign:8', 'campaign:10'] },
      { t: '採訪・形象照側拍', s: '', href: SM + 'Politics/Interviews',
        photos: ['interview:0', 'interview:2', 'interview:4', 'interview:6', 'interview:9'] }
    ]
  }
};
window.CAT_ORDER = ['activity', 'wedding', 'portrait', 'space', 'politics'];
