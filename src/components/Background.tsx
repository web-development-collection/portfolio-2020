import React, {Component, createRef} from 'react';


type Point = {
  x: number;
  y: number;
};

type Snowflake = {
  color: string;
  size: number;
  speed: number;
  position: Point;
};


/**
 * component Background
 * @author Ingo Andelhofs
 */
class Background extends Component<any, any> {
  public ref = createRef<HTMLCanvasElement>();
  public snowflakes: Snowflake[] = [];
  public angle = 0;


  // Getters
  public get canvas(): HTMLCanvasElement {
    return this.ref.current!;
  }

  public get dpi(): number {
    return window.devicePixelRatio;
  }

  public get context2D(): CanvasRenderingContext2D {
    return this.canvas.getContext('2d')!;
  }


  // Canvas helpers
  public resizeCanvas = () => {
    const {canvas, dpi, context2D} = this;

    canvas.height = canvas.clientHeight * dpi;
    canvas.width = canvas.clientWidth * dpi;
    context2D!.scale(dpi, dpi);
  }

  public renderBackground = () => {
    const {canvas, context2D} = this;

    // Setup Background
    // Create gradient
    const gradient = context2D.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, '#e7f0fd');
    gradient.addColorStop(1, '#accbee');

    // Apply gradient as background
    context2D.fillStyle = gradient;
    context2D.fillRect(0, 0, canvas.width, canvas.height);
  }

  public renderSnowflakes = () => {
    const {context2D, canvas} = this;
    this.angle += 0.001;

    for (let i = 0; i < this.snowflakes.length; i++) {
      const snowflake: Snowflake = this.snowflakes[i];
      const {x, y} = snowflake.position;

      snowflake.position.x += Math.cos(this.angle + snowflake.speed) + snowflake.size / 100;
      snowflake.position.y = snowflake.position.y + snowflake.speed;

      if (snowflake.position.y > canvas.height) {
        snowflake.position.y -= canvas.height * 1.5
      }

      context2D.beginPath();
      context2D.arc(x, y, snowflake.size / 2, 0, 2 * Math.PI, false);
      context2D.fillStyle = snowflake.color;
      context2D.fill();
      context2D.closePath();
    }
  }

  public renderCanvas = () => {
    this.renderBackground();
    this.renderSnowflakes();
    window.requestAnimationFrame(this.renderCanvas);
  }


  // Lifecycle methods
  public componentDidMount() {
    // Setup Canvas
    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas);
    window.requestAnimationFrame(this.renderCanvas);

    // Generate snowflakes
    const {width, height} = this.canvas;
    for (let i = 0; i < 1000; i++) {

      const rand = (min: number, max: number) => Math.random() * (max - min) + min;

      const snowflake: Snowflake = {
        color: `rgba(255, 255, 255, ${rand(0.4, 1)})`,
        position: {x: rand(0, width * 3) - width, y: rand(0, height * 3) - height},
        size: rand(1, 8),
        speed: rand(0.6, 1.2),
      };

      this.snowflakes.push(snowflake);
    }
  }


  // Rendering
  public render() {

    return <canvas ref={this.ref} className="background canvas" />;
  }
}

export default Background;