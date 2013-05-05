function calc_lines(trendline) {
  var x = 0;
  var y = 0;
  var sxy = 0;
  var sy = 0;
  var sx = 0;
  var sxx = 0;
  var slope = 0;
  var intercept = 0;

  for (var i=0; i<trendline.length;i++) {
    
    x = i+1;
    y = trendline[i]*1;
    sxy += (x * y);
    sx += x;
    sy += y;
    sxx += (x * x); 
  }

  slope = (sxy - ((1/x) * (sx * sy))) / (sxx - ((1/x) * (sx * sx)));
  intercept = (sy/x) - (slope*(sx/x));

  return {
    slope: slope,
    intercept: intercept    
  }

}