export const removeStopWords = (str)=>{
  const stopwords = ["?","!",".", "," ,'i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
  let res = []
  let words = str.split(' ')
  for(var i=0;i<words.length;i++) {
      if(!stopwords.includes(words[i])) {
          res.push(words[i])
      }
  }
  return(res.join(' '))
}

export const splitInParas = (str)=>{
  let paras = []
  let tempPara = ""

  for(var i = 0; i < str.length; i++){
    if(i == str.length - 1){
      paras.push(tempPara)
      tempPara = ""
    }else if(str[i] == "\n" && str[i+1] == "\n" && str[i+2] == "\n" && str[i+3] == "\n"){
      paras.push(tempPara)
      tempPara = ""
    }else{
      console.log(str[i])
      tempPara+=String(str[i])
      console.log(tempPara)
    }
  }
  return paras
}

export const invertIndexing = (paras)=>{
  let res = {}
  for(var i = 0;i < paras.length; i++){
    paras[i] = paras[i].replace("\n\n\n", "")
    const words = paras[i].split(' ').filter(function(item,i,allItems){
      return i==allItems.indexOf(item);
  })
    for(var j = 0;j < words.length; j++){
      if(res[words[j]] === undefined){
        res[words[j]] = [i]
      }else{
        res[words[j]].push(i)
      }
    }
  }
  return res
} 