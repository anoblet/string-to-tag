// Using a regular function instead of an arrow function allow us to bind (this) and retain context
export const strToTag = function(str, tag) {
  return new Function("tag", "return tag`" + str + "`").bind(this)(tag);
};
