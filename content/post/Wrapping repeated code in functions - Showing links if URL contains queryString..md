---
title: Wrapping repeated code in functions - Showing links if URL contains queryString.
date: 2019-04-09T00:00:00.000Z
---

*Problem:* Only wanting to show 'Clear All' button if URL queryString was present.

*Issue:* HTML markup couldn't be easily changed (so best to work with classes and elements already present). And has to work in IE 11 😖

## HTML:
```
<div class="question-title">Type</div>
<ul>
	<input type="hidden" name="f.type|type" value="decision">
	
	<!-- below 'button/link' has to be shown/hidden based on whether or not f.type|type has a value in URL -->
	
	<li class="filter__clear-btn">
		<a href="#" class="js-set-hidden active" data-fieldname="f.type|type" data-value="">X Clear filter</a>
	</li>

	<li>
		<a href="#" class="js-set-hidden is-selected" data-fieldname="f.type|type" data-value="decision">Decision</a>
	</li>
</ul>

<div class="question-title">Subject</div>
<ul>
	<input type="hidden" name="f.subject|subject" value="">
	<li class="filter__clear-btn">
		<a href="#" class="js-set-hidden" data-fieldname="f.subject|subject" data-value="">X Clear filter</a>
	</li>
	
	<li>
		<a href="#" class="js-set-hidden" data-fieldname="f.subject|subject" data-value="legal resources">Legal resources</a>
	</li>
	
	<li>
		<a href="#" class="js-set-hidden" data-fieldname="f.subject|subject" data-value="disputes">Disputes</a>
	</li>
</ul>

<!-- There was another link/button with the data-fieldname set to "f.Type|decisiontype" but I havent included it here as you get the idea. -->
```

## URL and Params:
```
https://srwsd.clients.squiz.net/wcc/search/_nocache?f.type%7Ctype=decision&clive=&f.subject%7Csubject=&ge_publishdate=&le_publishdate
```

### Params we will check against 
`f.subject%7Csubject=` and 
`f.type%7Ctype=` and 
`g.Type%7Cdecisiontype=`.

Now, let's get to the good stuff! The JS!

## Original JavaScript (jQuery):
#### (Lots of repeating myself... this was an issue that i needed to fix later)

```
  var url = "https://srwsd.clients.squiz.net/wcc/search/_nocache?f.type%7Ctype=decision&clive=&f.subject%7Csubject=help&f.type%7Cdecisiontype=decision&ge_publishdate=&le_publishdate=&query=legal&num_ranks=10&sort=relevance&start_rank=#";
	
	//the var reg is saying find a '?' or '&' plus my field plus its '=' and Match a single character NOT present in the list below [^&#]*     the * means match between 0 and unlimited times, as many times as possible but ignore once you get to '&' or '#'
	
	//var string = reg.exec(href) The exec() method executes a search for a match in a specified string. Returns a result array, or null.

    var getQueryString = function (field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    }

    var typeType = getQueryString('f.type%7Ctype', url);
    
    var subjectType = getQueryString('f.subject%7Csubject', url);

    var decisionType = getQueryString('f.Type%7Cdecisiontype', url);
		

//below has lots of repetition
    

   if ((typeType != null) && (typeType).length != 0) {
		 $('.filter__clear-btn > a[data-fieldname="f.type|type"]').addClass('active');
   } else {
		 $('.filter__clear-btn > a[data-fieldname="f.type|type"]').removeClass('active');
   }

   if ((subjectType != null) && (subjectType).length != 0) {
		 $('.filter__clear-btn > a[data-fieldname="f.subject|subject"]').addClass('active');
    } else {
			$('.filter__clear-btn > a[data-fieldname="f.subject|subject"]').removeClass('active');
		}
		
	if ((decisionType != null) && (decisionType).length != 0) {
		$('.filter__clear-btn > a[data-fieldname="f.Type|decisiontype"]').addClass('active');

	} else {
		$('.filter__clear-btn > a[data-fieldname="f.Type|decisiontype"]').removeClass('active');
	}

```

The above code is easy to read... however there is a lot of repitition so it is not very DRY 😓we can fix that by refactoring our conditional statements into a function so we dont have to repeat ourselves quite so much! (oh, and obviously the URL was hardcoded for testing purposes.. to push it back into my actual project I had to undo that 😝)


## New JavaScript (jQuery)!:

```
 var url = window.location.href;

    var getQueryString = function (field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    }

    var typeType = getQueryString('f.type%7Ctype', url);
    
    var subjectType = getQueryString('f.subject%7Csubject', url);
    var decisionType = getQueryString('f.Type%7Cdecisiontype', url);

    function showFilters($selector, value) {
        if ((value != null) && (value).length != 0) {
            $($selector).addClass('active');
        } else {
            $($selector).removeClass('active');
        }
    }

    showFilters('.filter__clear-btn > a[data-fieldname="f.Type|decisiontype"]', decisionType);

    showFilters('.filter__clear-btn > a[data-fieldname="f.subject|subject"]', subjectType);

    showFilters('.filter__clear-btn > a[data-fieldname="f.type|type"]', typeType);
```

We saved a fair few lines above by adding our showFilters() function and wrapping the conditional logic in it
```
  function showFilters($selector, value) {
        if ((value != null) && (value).length != 0) {
            $($selector).addClass('active');
        } else {
            $($selector).removeClass('active');
        }
    }
```

The showFilters function takes two args (1) the $selector which is the jQuery element selector like `.filter__clear-btn > a[data-fieldname="f.type|type"]'` and (2) the value which is the URL param `f.Type%7Cdecisiontype` 😀






