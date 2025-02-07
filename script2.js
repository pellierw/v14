let we = [ 'w/w1.jpg', 
    'w/w2.jpg', 
    'w/w3.jpg',
    'w/w4.jpg',
    'w/w5.jpg',
    'w/w6.jpg',
    'w/w7.jpg',
    'w/w8.jpg',
    'w/w9.jpg',
    'w/w10.jpg',
    'w/w11.jpg',
    'w/w12.jpg',
    'w/w13.jpg',
    'w/w14.jpg',
    'w/w15.jpg'
  ]
    
    function getRandomElement(arr) {
      let randIndex = Math.floor(Math.random() * arr.length);
      return arr[randIndex];
    }
    
    let button_1 = document.querySelector('.gen1');
    
    let image_w = document.querySelector('.current_game2');
  
    button_1.addEventListener('click', function () {
      let randomElement = getRandomElement(we);
      smoothly(image_w, 'src', randomElement); 
    });

    let valen = [ 'v/v1.jpg', 
        'v/v2.jpg', 
        'v/v3.jpg',
        'v/v4.jpg',
        'v/v5.jpg',
        'v/v6.jpg',
        'v/v7.jpg',
        'v/v8.jpg',
        'v/v9.jpg',
        'v/v10.jpg'
      ]
        
        function getRandomElement(arr) {
          let randIndex = Math.floor(Math.random() * arr.length);
          return arr[randIndex];
        }
        
        let button = document.querySelector('.gen');
        let image = document.querySelector('.current_game4');
        
        button.addEventListener('click', function () {
          let randomElement = getRandomElement(valen);
          smoothly(image, 'src', randomElement); 
        });