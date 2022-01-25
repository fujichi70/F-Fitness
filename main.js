'use strict';

{

    class MobileMenu {
        constructor() {
            this.DOM = {};
            this.DOM.container = document.querySelector(".sp-menu");
            this.eventType = this._getEventType();
            this._addEvent();
        }
        
        
        _getEventType() {
            const isTouchCapable =
            navigator.userAgent.indexOf('iPhone') > 0 ||
            navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0 || 
            navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0;
            
            return isTouchCapable ? "touchstart" : "click";
                }
        
        _toggle() {
            this.DOM.container.classList.toggle("menu-open");
        }
        
        _addEvent() {
            this.DOM.container.addEventListener(this.eventType, this._toggle.bind(this), { passive: true });
        }
    }

new MobileMenu();


}