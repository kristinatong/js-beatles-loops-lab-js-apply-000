function theBeatlesPlay(mus, inst){
  array = []
  for (i = 0; i < mus.length; i++){
    array.push(`${mus[i]} plays ${inst[i]}.`)
  }
  return array
}