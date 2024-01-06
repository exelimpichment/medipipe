'use client';

export default function Home() {
  const handleClick = () => {
    console.log('clicked');
    console.log('clicked2');
    console.log('clicked3');
    console.log('clicked4');
  };

  return (
    <div>
      <div onClick={handleClick}>fkdfdfndkf</div>
    </div>
  );
}
