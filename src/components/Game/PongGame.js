import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const PongGame = () => {
  const { t } = useTranslation();

  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [leftPaddleY, setLeftPaddleY] = useState(250);
  const [rightPaddleY, setRightPaddleY] = useState(250);
  const [ball, setBall] = useState({ x: 400, y: 300, vx: 1, vy: 1 }); // Adjust initial velocity

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (context) {
      const animate = () => {
        update();
        draw();
        requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animate);
      };
    }
  }, [context, leftPaddleY, rightPaddleY, ball]);

  const draw = () => {
    if (context && canvasRef.current) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );
      drawMiddleLine();
      drawBall();
      drawPaddles();
    }
  };

  const drawMiddleLine = () => {
    context.lineWidth = 3;
    context.strokeStyle = "rgb(255, 255, 255)";
    context.beginPath();
    context.moveTo(canvasRef.current.width / 2, 10);
    context.lineTo(canvasRef.current.width / 2, canvasRef.current.height - 10);
    context.closePath();
    context.stroke();
  };

  const drawBall = () => {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(ball.x, ball.y, 10, 0, Math.PI * 2, true);
    context.fill();
  };

  const drawPaddles = () => {
    context.fillStyle = "#fff";
    context.fillRect(50, leftPaddleY, 20, 100); // Left paddle
    context.fillRect(canvasRef.current.width - 70, rightPaddleY, 20, 100); // Right paddle
  };

  const update = () => {
    moveBall();
    movePaddles();
  };

  const moveBall = () => {
    setBall((prevBall) => ({
      ...prevBall,
      x: prevBall.x + prevBall.vx,
      y: prevBall.y + prevBall.vy,
    }));

    handleBallCollision();
  };

  const handleBallCollision = () => {
    // Handle collision with top and bottom walls
    if (
      ball.y + ball.vy > canvasRef.current.height - 10 ||
      ball.y + ball.vy < 10
    ) {
      setBall((prevBall) => ({ ...prevBall, vy: -prevBall.vy }));
    }

    // Handle collision with paddles
    if (
      (ball.x + ball.vx < 70 &&
        ball.y > leftPaddleY &&
        ball.y < leftPaddleY + 100) ||
      (ball.x + ball.vx > canvasRef.current.width - 70 &&
        ball.y > rightPaddleY &&
        ball.y < rightPaddleY + 100)
    ) {
      setBall((prevBall) => ({ ...prevBall, vx: -prevBall.vx }));
    }

    // Check if ball goes out of bounds
    if (ball.x + ball.vx > canvasRef.current.width - 10) {
      resetBall(); // Player 1 scores
    } else if (ball.x + ball.vx < 10) {
      resetBall(); // Player 2 scores
    }
  };

  const resetBall = () => {
    setBall({
      x: canvasRef.current.width / 2,
      y: canvasRef.current.height / 2,
      vx: -ball.vx, // Change direction of the ball
      vy: ball.vy,
    });
  };

  const movePaddles = () => {
    // Move paddles based on key press
    // Left paddle
    if (leftPaddleY < 0) {
      setLeftPaddleY(0);
    } else if (leftPaddleY > canvasRef.current.height - 100) {
      setLeftPaddleY(canvasRef.current.height - 100);
    }

    // Right paddle
    if (rightPaddleY < 0) {
      setRightPaddleY(0);
    } else if (rightPaddleY > canvasRef.current.height - 100) {
      setRightPaddleY(canvasRef.current.height - 100);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.code) {
      case "ArrowDown":
        setRightPaddleY(rightPaddleY + 10);
        break;
      case "ArrowUp":
        setRightPaddleY(rightPaddleY - 10);
        break;
      case "KeyW":
        setLeftPaddleY(leftPaddleY - 10);
        break;
      case "KeyS":
        setLeftPaddleY(leftPaddleY + 10);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h2>{t("game.title")}</h2>
      <p>{t("game.controls")}</p>
      <canvas ref={canvasRef} width={1800} height={600} />
    </div>
  );
};

export default PongGame;
