// Misc functions
export function get_start_weight(key) {
  return data[key].start_weight.toFixed(1);
};
export function get_current_weight(key) {
  return (data[key].data[data[key].data.length-1].y).toFixed(1);
};
export function get_weight_loss(key) {
  return (data[key].start_weight - data[key].data[data[key].data.length-1].y).toFixed(1);
};
