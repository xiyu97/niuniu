var niuniu = {
  'k': '((+(~+!![]*[~[]]+[]+(+[])))[((!![]+[])[+[]])+(([]+{})[-~+[]])+((([]+[])[(([]+{})[~!![]*~!![]+-~[]])+(([]+{})[-~+[]])+(([][[]]+[])[-~[]])+((![]+[])[-~!![]-~[]])+((!![]+[])[+[]])+((!![]+[])[-~[]])+(([][[]]+[])[+[]])+(([]+{})[~!![]*~!![]+-~[]])+((!![]+[])[+[]])+(([]+{})[-~+[]])+((!![]+[])[-~[]])]+[])[-~!![]*-~!![]*-~!![]+-~[]])+((!![]+[])[+[]])+((!![]+[])[-~[]])+(([][[]]+[])[(-(~+[]+~+[])*-(~+[]+~+[]))+(-~+[])])+(([][[]]+[])[-~[]])+((([]+[])[(([]+{})[~!![]*~!![]+-~[]])+(([]+{})[-~+[]])+(([][[]]+[])[-~[]])+((![]+[])[-~!![]-~[]])+((!![]+[])[+[]])+((!![]+[])[-~[]])+(([][[]]+[])[+[]])+(([]+{})[~!![]*~!![]+-~[]])+((!![]+[])[+[]])+(([]+{})[-~+[]])+((!![]+[])[-~[]])]+[])[(-~!![]-~[])*(-~!![]*-~!![]+-~[])+~[]])]((-~!![]-~[])*(-~!![]*-~!![]+-~[]-~!![])))',
  'f': '(([]+![])[+[]])',
  'c': '(([]+{})[~!![]*~!![]+-~[]])',
  ' ': '(([]+{})[-~!![]*-~!![]+-~[]+-~!![]])',
  'v': '((([]+[])[(![]+[])[-~+[]]+(!![]+[])[+[]]]+[])[+(~+!![]*[~[]]+[]+(-~+[]))])',
  'i': '(([][[]]+[])[(-(~+[]+~+[])*-(~+[]+~+[]))+(-~+[])])',
  'o': '(([]+{})[-~+[]])',
  
  'a': '((![]+[])[-~+[]])',
  't': '((!![]+[])[+[]])',
  's': '((![]+[])[-~!![]-~[]])',
  'S': '((([]+[])[(([]+{})[~!![]*~!![]+-~[]])+(([]+{})[-~+[]])+(([][[]]+[])[-~[]])+((![]+[])[-~!![]-~[]])+((!![]+[])[+[]])+((!![]+[])[-~[]])+(([][[]]+[])[+[]])+(([]+{})[~!![]*~!![]+-~[]])+((!![]+[])[+[]])+(([]+{})[-~+[]])+((!![]+[])[-~[]])]+[])[-~!![]*-~!![]*-~!![]+-~[]])',
  'r': '((!![]+[])[-~[]])',
  'n': '(([][[]]+[])[-~[]])',
  'g': '((([]+[])[(([]+{})[~!![]*~!![]+-~[]])+(([]+{})[-~+[]])+(([][[]]+[])[-~[]])+((![]+[])[-~!![]-~[]])+((!![]+[])[+[]])+((!![]+[])[-~[]])+(([][[]]+[])[+[]])+(([]+{})[~!![]*~!![]+-~[]])+((!![]+[])[+[]])+(([]+{})[-~+[]])+((!![]+[])[-~[]])]+[])[(-~!![]-~[])*(-~!![]*-~!![]+-~[])+~[]])',
  'u': '(([][[]]+[])[+[]])',
  
  '0': '([]+(+[]))',
  '1': '(-~[])',
  '2': '(-~!![])',
  '3': '(-~!![]-~[])',
  '4': '(-~!![]*-~!![])',
  '5': '(-~!![]*-~!![]+-~[])',
  '6': '((-~!![])*(-~!![]-~[]))',
  '7': '(-~!![]-~[]-~!![]*-~!![])',
  '8': '((-~!![])*(-~!![]*-~!![]))',
  '9': '((-~!![])*(-~!![]*-~!![])-~[])',
}

function trans(str){
  let code = ''
  let arr = str.split('')
  arr.forEach(e => {
    code += niuniu[e] + '+'
  })
  return code.replace(/\+$/, '')
}

trans('kfc vivo50')