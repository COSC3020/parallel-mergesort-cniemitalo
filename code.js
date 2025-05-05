//mergesort code taken from the lecture slides
function merge(x, lo, mid, hi, tmp) {
  let a = lo, b = mid + 1; 
  for (let k = lo; k <= hi; k++) {
    if (a <= mid && (b > hi || x[a] < x[b])) {
      tmp[k] = x[a++]; 
    } else {
      tmp[k] = x[b++]; 
    }
  }
  for (let k = lo; k <= hi; k++) {
    x[k] = tmp[k]; 
  }
}

function msort(x, lo, hi, tmp) {
  if (lo >= hi) return; 
  let mid = Math.floor((lo + hi) / 2); 
  msort(x, lo, mid, tmp); 
  msort(x, mid + 1, hi, tmp); 
  merge(x, lo, mid, hi, tmp); 
}

function mergesort(x) {
  let tmp = []; 
  msort(x, 0, x.length - 1, tmp); 
}

