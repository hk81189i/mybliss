(function() {

    var a = 'trigger-overlay'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



/**/

(function() {

    var a = 'trigger-overlay-1'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



/**/(function() {

    var a = 'trigger-overlay-2'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



/**/

(function() {

    var a = 'trigger-overlay-3'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



/**/

(function() {

    var a = 'trigger-overlay-4'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-5'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-6'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-7'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-8'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-9'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-10'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-11'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-12'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-13'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-14'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-15'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();



(function() {

    var a = 'trigger-overlay-16'

    var triggerBttn = document.getElementById( a ),



    overlay = document.querySelector( 'div.overlay' ),

    closeBttn = overlay.querySelector( 'button.overlay-close' );

    transEndEventNames = {

	'WebkitTransition': 'webkitTransitionEnd',

	'MozTransition': 'transitionend',

	'OTransition': 'oTransitionEnd',

	'msTransition': 'MSTransitionEnd',

	'transition': 'transitionend'

	},

    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],

    support = { transitions : Modernizr.csstransitions };



    function toggleOverlay() {

	if( classie.has( overlay, 'open' ) ) {

	    classie.remove( overlay, 'open' );

	    classie.add( overlay, 'close' );

	    var onEndTransitionFn = function( ev ) {

		if( support.transitions ) {

		    if( ev.propertyName !== 'visibility' ) return;

		    this.removeEventListener( transEndEventName, onEndTransitionFn );

		    }

		classie.remove( overlay, 'close' );

		};

	    if( support.transitions ) {

		overlay.addEventListener( transEndEventName, onEndTransitionFn );

		}

	    else {

		onEndTransitionFn();

		}

	    }

	else if( !classie.has( overlay, 'close' ) ) {

	    classie.add( overlay, 'open' );

	    }

	}



    triggerBttn.addEventListener( 'click', toggleOverlay );

    closeBttn.addEventListener( 'click', toggleOverlay );

})();
