;(function (window, document) {

    window.WobbleString = WobbleString; // declare window object

    /**
     * Wobbles the characters contained in an HTML element.
     * @global
     * @param {string} id The ID of the HTML element containg the text.
     * @param {int} [amount=2] The amount to wobble the text.
     */
    function WobbleString(id, amount) {
        this.id = id;
        this.amount = +amount || 2;
        this.chars = [];
    }

    /**
     * Builds a series of SPAN elements each containing one character with
     * CSS style position:relative.
     * @public
     * @returns {Object} Self.
     */
    WobbleString.prototype.build = function() {
        var $elem  = document.getElementById(this.id);
        var string = $elem.childNodes[0].nodeValue;
        var length = +string.length || 0;

        var txtNode;

        empty($elem); // method below

        for (var i = 0; i < length; i++) {
            this.chars[i] = document.createElement("span");
            this.chars[i].style.position = "relative"; // allows left and top CSS

            txtNode = document.createTextNode(string[i]);
            this.chars[i].appendChild(txtNode);

            this.chars[i].posX = 0; // declaring .posX
            this.chars[i].posY = 0; // declaring .posY

            $elem.appendChild(this.chars[i]); // adds the SPAN to the HTML element
        }

        return this;
    };

    /**
     * Uses setInterval() to call the move() method.
     * @public
     * @returns {Object} Self.
     */
    WobbleString.prototype.wobble = function() {
        var self = this; // for setInterval() scope

        setInterval(function() {
            self.move();
        }, 50);

        return this;
    };

    /**
     * Sets the left and top CSS style of each SPAN element in an array.
     * @public
     * @returns {Object} Self.
     */
    WobbleString.prototype.move = function() {
        var length = this.chars.length;

        for (var i = 0; i < length; i++) {
            this.chars[i].posX += Math.random() * this.amount * 2 - this.amount;
            this.chars[i].posY += Math.random() * this.amount * 2 - this.amount;

            this.chars[i].style.left = this.chars[i].posX + "px"; // new x position
            this.chars[i].style.top  = this.chars[i].posY + "px"; // new y position
        }

        return this;
    };

    /**
     * Empties an HTML element by removing each firstChild till there are none.
     * @private
     * @param {Object} $elem An HTML object.
     * @returns {undefined}
     */
    function empty($elem) {
        while ($elem.firstChild) {
            $elem.removeChild($elem.firstChild);
        }
    }

}(window, document));
