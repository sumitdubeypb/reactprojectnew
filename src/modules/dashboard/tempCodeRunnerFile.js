const myapi = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      // console.log(d.data.products);
      setdate(d.data.products);
    })
  }

  useEffect(() => {
    myapi();
  }, []);