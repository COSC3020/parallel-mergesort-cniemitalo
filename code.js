//based off mergesort code from sorting lecture slides 

//merge remains the same 
function merge(x, low, mid, high, tmp) {
  let a = low, b = mid + 1; 
  for (let k = low; k <= high; k++) {
    if (a <= mid && (b > high || x[a] < x[b])) {
      tmp[k] = x[a++]; 
    } else {
      tmp[k] = x[b++]; 
    }
  }
  for (let k = low; k <= high; k++) {
    x[k] = tmp[k]; 
  }
}

async function parallelMSort(x, low, high, tmp) {
  if (low >= high) return; 
  let mid = Math.floor((low + high) / 2); 
  //run both halves of the sort in parallel
  //instead of waiting for recursion 
  await Promise.all([
    parallelMSort(x, low, mid, tmp),
    parallelMSort(x, mid + 1, high, tmp)
  ])
  merge(x, low, mid, high, tmp); 
}

async function mergesort(x) {
  let tmp = []; 
  //run async function parallelMSort
  await parallelMSort(x, 0, x.length - 1, tmp); 
}
