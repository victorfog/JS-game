export default class View {
    constructor (element, width, height, rows, collums) {
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.blockWidth = this.width / collums;
        this.blockHeight  = this.height / rows;

        this.element.appendChild(this.canvas);

    }
    renderPlayfild({playfild}){  //теперь должно приходить состояние реструкторизация 8)
        for (let y = 0; y < playfild.length; y++){
            const line = playfild[y];

            for (let x = 0;x < line.length; x++){
                const block = line[x];

                if (block){
                    this.context.fillStyle = 'red';
                    this.context.strokeStyle = 'black';
                    this.context.lineWidth = 2;

                    this.context.fillRect(x * this.blockWidth, y * this.blockHeight, this.blockWidth, this.blockHeight);
                }

            }
        }
    }
}