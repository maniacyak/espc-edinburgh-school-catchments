# What?
This bookmarklet adds a small panel to the map view of [ESPC.com](http://www.espc.com)’s search results, which you can use to display catchment area boundaries and school locations for each category of school.

# How?
Drag the link below to your browser’s bookmarks or favourites bar.

<a href=“(javascript:void((function(){var id='catchments',s=document.getElementById(id);if(s){s.parentNode.removeChild(s);}s=document.createElement('script');s.src='https://s3-eu-west-1.amazonaws.com/edinburgh-school-catchments/catchments.js?v='+Date.now();s.type='text/javascript';s.id=id;document.body.appendChild(s);})());” style=“display; block; margin: 0 auto; border-radius: 10px; padding: 5px; border: 1px solid inherit;”>Edinburgh Catchment Areas</a>

To use, do a search at [ESPC.com](http://www.espc.com), click “Map View” and then click the link you just dragged to your bookmarks bar to get started.

# Why?
Because some people like knowing where their kids will end up going to school before they spend enormous sums on a house.

## Acknowledgements
- [Alex Turnbull](https://twitter.com/alexturnbull) for suggesting the idea.
- [The City of Edinburgh Council](https://www.edinburgh.gov.uk)  for publishing their [datasets here on GitHub](https://github.com/edinburghcouncil/datasets)
- [GDAL’s `ogr2ogr` utility](http://www.gdal.org/ogr2ogr.html), which I used to convert Edinburgh Council’s Esri shape files into Google Maps-compatible KML files.
- [Dr Hannah Fry](http://hannahfry.co.uk), whose [Python script](http://hannahfry.co.uk/2012/02/01/converting-british-national-grid-to-latitude-and-longitude-ii/) I used to batch convert Edinburgh Council’s Ordnance Survey (OSGB36) school locations into GPS (WGS84) coordinates.