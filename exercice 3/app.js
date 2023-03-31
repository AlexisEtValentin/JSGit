document.getElementById("ajaxButton").addEventListener('click', makeRequest);
        
        function makeRequest() {
            
            fetch('data.html')
            
            .then(function(response){
                
                return response.text();
                
            })
            
            .then(function(data){
                
                document.getElementById('update').innerHTML = data;
                
            })
            
        }