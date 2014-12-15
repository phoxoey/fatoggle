(function ( $ ) {
        $.fn.fatoggle = function(cl,options) {
            var self = this;

            if(cl.length > 0 && cl.length <=2){
                $(this).addClass('fa').addClass(cl[0]);

                if(options['classes'] && options['classes'].length > 0){
                   for(var e=0;e<options['classes'].length;e++){
                        $(this).addClass(options['classes'][e]);
                   }
                }

                $(this).on('click', function() {
                    if($(this).hasClass(cl[0])){
                        if(options['radio']){
                            $.map(self, function(el) {
                                $(el).removeClass(cl[1]);
                                $(el).addClass(cl[0]);
                            });
                        }
                        $(this).removeClass(cl[0]);
                        $(this).addClass(cl[1]);

                        if(typeof options['toggleOn'] === 'function'){
                            options['toggleOn'](this);
                        }

                        if(options['onClasses'] && options['onClasses'].length >0){
                            for(var i=0;i<options['onClasses'].length;i++){
                                $(this).addClass(options['onClasses'][i]);
                            }
                        }
                    }else{
                        $(this).removeClass(cl[1]);
                        $(this).addClass(cl[0]);

                        if(typeof options['toggleOff'] === 'function'){
                            options['toggleOff'](this);
                        }

                        if(options['onClasses'] && options['onClasses'].length >0){
                            for(var i=0;i<options['onClasses'].length;i++){
                                $(this).removeClass(options['onClasses'][i]);
                            }
                        }
                    }
                });
            }else{
                console.error('fatoggle requires 2 css classes');
            }
        };
}( jQuery ));