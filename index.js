

module.exports = function(arr,search,comparitor) {
  if(!arr) return -1;
  // as long as it has a length i will try and itterate over it.
  if(arr.length === undefined) return -1;
  
  if(!comparitor) comparitor = module.exports._defaultComparitor();

  return bs(arr,search,comparitor);
}

module.exports.first = function(arr,search,comparitor) {
  return module.exports.closest(arr,search,{exists:true},comparitor);
}

module.exports.last = function(arr,search,comparitor) {
  return module.exports.closest(arr,search,{exists:true,end:true},comparitor);
}

module.exports.closest = function(arr,search,opts,comparitor) {
  if(arr.length === 1) return arr[0];

  if(typeof opts === 'function') {
    opts = {};
    comparitor = opts;
  }
  opts = opts||{};
  if(!comparitor) comparitor = module.exports._defaultComparitor();
  
  return bsclosest(arr, search,comparitor,opts.end,opts.exists?false:true);
}

module.exports.range = function(arr,from,to,comparitor) {
  if(!comparitor) comparitor = module.exports._defaultComparitor();
  var fromi = bsclosest(arr, from,comparitor,false,true);
  var toi = bsclosest(arr, to,comparitor,true,true);

  return arr.slice(fromi,arr[toi]>to?toi:toi+1);
}

module.exports.indexObject = function(o,extractor) {
  var index = [];
  
  Object.keys(o).forEach(function(k){
    index.push({k:k,v:extractor(o[k])});
  });

  return index.sort(function(o1,o2){
    if(o1.v>o2.v) return 1
    else if(o1.v<o2,v) return -1
    else return 0;
  });
}

module.exports._defaultComparitor = function() {
  var indexMode;
  return function(v,search){
    // support the object format of generated indexes
    if(indexMode === undefined){
      if(typeof v === 'object' && v.hasOwnProperty('v')) indexMode = true;
      indexMode = false;
    }

    if(indexMode) v = v.v;
    
    if(v > search) return 1;
    else if(v < search) return -1;
    return 0;
  };
};

module.exports._binarySearch = bs;
module.exports._binarySearchClosest = bsclosest;

function bs(arr, search, comparitor) {

  var max = arr.length-1,min = 0,middle,cmp;
  // continue searching while key may exist
  while (max >= min) {
    middle = mid(min, max);

    cmp = comparitor(arr[middle],search);

    if (cmp === -1) {
      min = middle + 1;
    } else if (cmp === 1) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  // key not found
  return -1;
}

function bsclosest(arr, search, comparitor, invert, closest) {
  var mids = {};
  var min = 0,max = arr.length-1,middle,cmp;
  var sanity = arr.length;

  while (min < max) {
    middle = midCareful(min, max,mids); 
    cmp = comparitor(arr[middle],search);

    if(invert){
      if (cmp === 1){
        max = middle - 1;
      } else {
        min = middle;
      }       
    } else {
      if (cmp === -1){
        min = middle + 1;
      } else {
        max = middle;
      }
    }
    sanity--;
    if(!sanity) break;
  }
 
  
  if (max == min && arr[min] == search) {
    return min;
  } else {
    return closest?invert?min+1:min-1:-1;
  }
}

function mid(v1,v2){
  return v1+Math.floor((v2-v1)/2);
}

function midCareful(v1,v2,mids){
  var mid = v1+Math.floor((v2-v1)/2);
  if(mids[mid]) mid = v1+Math.ceil((v2-v1)/2);
  mids[mid] = 1;
  return mid;
}
