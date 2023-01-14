function AcharPalavra(a, b) 
{
 var contador = 0;
 for (let i= 0; i < b.length; i++) {
    if (b.charAt(i) === a) 
      {
      contador += 1;
      }
  }
  return contador;
}


console.log(AcharPalavra('a', 'how many times does the character occur in this sentence?'))