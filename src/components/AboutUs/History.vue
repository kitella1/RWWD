<template>
    <div id="history">
        <h2>Our History</h2>   
        <img src="@/assets/images/molly.png" width="1925" height="2500" alt="A black and white picture of Molly McIntire in blue dungarees"/>     
        <div id="text">
        <p>
            McIntire Fruits started in 1949 as McIntire Fruit Farms. Molly McIntire and her husband maintained 3 acres of apple trees.
            The popularity of the apple and cinnamon muffins that were consequently created allowed McIntire Fruit Farms to expand their horizons.
            By 1954, McIntire Fruit Farms owned over 15 acres, growing strawberries and raspberries too.
        </p>
        <p>
            Molly McIntire's son James inherited the business in 2004.
            The business was immediately diversified; blackberries and cherries were planted, along with root vegetables
            and other fruits trees. Business outside of Scotland had also blossomed and triggered a rebrand to McIntire Fruits.
        </p>
        <p>
            In recent years, James McIntire runs the business with his own daughter, Ashley Ray.
            McIntire Fruits now covers over 300 acres of land in the original Scottish site.
            In 2004, Ashley brokered the purchase of a 310-acre site in Delaware, USA.
            It joins the McIntire Fruits family as the business continues to thrive.
        </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@media only screen and (min-width: 200px) {    
    #history {
        background: $secondary;
        color: $white;
        padding: 2em;
        padding-top: 0.5em;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 25px;
    }
        }
        @media only screen and (min-width: 700px) {
            #history {
                display: grid;
                grid-template-columns: 40% 60%;
                column-gap: 1em;
                align-items: center;
                padding: 2em 5em;
            }
            h2 {
                grid-column-start: 1;
                grid-column-end: 3;
            }
            
            #text {
                grid-column-start: 2;
                grid-row-start: 2;
                padding: 0em 0.5em;
            }
        }
        @media only screen and (min-width: 1000px) {
            #history {
                padding-left: 25vw;
                padding-right: 20vw;
                column-gap: 0em;
            }
             #text {
                padding: 0em 4em;
            }
        }
        
</style>