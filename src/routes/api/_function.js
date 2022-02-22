export function extractAgent(invalidJson) {
    console.log('invalid',invalidJson)
    var t2 = Object.values(invalidJson)
    console.log('2',t2)
    t2=t2.split('user-agent')[1]
    console.log('ttttttttttttt',t2)
    t2=t2.toLowerCase()
    return t2.includes('mobi') || t2.includes('phone') || t2.includes('mini')
        ? 'Mobile'
        : 'Desktop'

}
