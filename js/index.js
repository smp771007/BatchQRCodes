var app = new Vue({
    el: '#app',
    data: {
        codeText: '',
        qrcords: []
    },
    methods: {
        generate: function (codeText) {
            var list = codeText.split(/\n/);

            this.qrcords = [];

            for (var i = 0; i < list.length; i++) {
                if (!list[i]) continue;
                this.qrcords.push({ id: i, code: list[i] });
            }
        },
        generateCode: function () {
            for (var i = 0; i < this.qrcords.length; i++) {
                var code = this.qrcords[i].code;
                new QRCode(document.getElementById("code-" + i), code);
            }
        }
    }
})