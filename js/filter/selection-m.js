/* 
This JavaScript file is defining the configuration for a HugoTagsFilter object. The first part of the code generates an array of filter objects based on an array of taxons, each of which has properties such as name, prefix, buttonClass, etc. The second part of the code sets the configuration of the HugoTagsFilter object with the generated filtersArray and other properties such as showItemClass, filterItemClass, activeButtonClass, etc.
*/

var filtersArray = []

for (i = 0; i < taxons.length; i++) {
  taxonElem =     {
    name: taxons[i],
    prefix: taxons[i].slice(0, 4) + "-",
    buttonClass: taxons[i].slice(0, 4) + "-button",
    allSelector: "#selectAll" + taxons[i][0].toUpperCase() + taxons[i].substring(1),
    attrName: 'data-' + taxons[i],
    selectedPrefix: 's'+taxons[i].slice(0, 4) + "-",
    countPrefix: 'c'+taxons[i].slice(0, 4) + "-"
  };
  filtersArray.push(taxonElem);
}

var htfConfig = {
  filters: filtersArray,
  showItemClass: "show-item",
  filterItemClass: "tf-filter-item",
  activeButtonClass: "active",
  counterSelector: "selectedItemCount",
  populateCount: true,
  setDisabledButtonClass: "disabled"
}

var htf = new HugoTagsFilter(htfConfig);
