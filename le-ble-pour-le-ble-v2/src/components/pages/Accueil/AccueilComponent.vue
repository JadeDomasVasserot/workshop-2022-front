<template>
    <div id="AccueilComponent">
       <router-link to="/calendrier">
        <div class="container calendrier">
            <div>
                <h2 class="title"> 
                   CALENDRIER
                </h2>
                <img width="200px" src="@/assets/icons/calendar-date-fill.svg"> 
            </div>  
        </div>
     </router-link>
     <router-link to="/stock">
        <div class="container stock">
            <div>
                <h2 class="title">
                    STOCK
                </h2>
                <img width="200px" src="@/assets/icons/box-fill.svg">
            </div>
        </div> 
    </router-link> 
    </div>
    </template>
    
    <script>
    export default {
      name: "AccueilComponent",
    }
    </script>
    <style scoped>
    #AccueilComponent{
        margin-top: 5%;
        display: flex;
        margin-bottom: 2%;
        justify-content: space-around;
    }
    a{
        text-decoration: none;
        color:#876445;
    }
    img{
        margin-top: 10%;
    }

    </style>