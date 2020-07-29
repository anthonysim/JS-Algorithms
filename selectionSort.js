function selectionSort(arr) { 
        
    for (let i = 0; i < arr.length - 1; i++) {

        let min = i;
        for (let j = 1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min = j; 
            }
         }

         const temp = arr[i]; 
         arr[i] = arr[min];
         arr[min] = temp;      
    }
    
    return arr;
}
