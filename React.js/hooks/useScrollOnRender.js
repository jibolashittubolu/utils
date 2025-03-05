import React from 'react'; 

// hook to scroll to an element on render
function useScrollOnRender() {
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
 
  return ref;
};

export default useScrollOnRender;





// // EXAMPLE

// example alert component i.e child
function Alert() {
  let alertRef = useScrollOnRender();
  
  return (
    <div ref={alertRef} className="border border-red-500 bg-red-50 text-red-500 font-bold p-5 my-2">I am an alert! I must be read!</div>
  );
};

// parent component
function App() {
  const [alert, setAlert] = React.useState(false);
  
  return (
    <div className="p-10">
      <h1 className="font-semibold text-3xl py-2">Scroll On Render</h1>
      { alert && <Alert />}
      <p>Scroll to the bottom and click the button!</p>
      <div className="h-96 bg-red-500"></div>
      <div className="h-96 bg-blue-500"></div>
      <div className="py-2 h-96 bg-green-500"></div>
      <button onClick={() => setAlert(!alert)} className="rounded my-5 bg-gray-100 font-bold py-3 px-4">Toggle Alert</button>
     </div>
    )
};
