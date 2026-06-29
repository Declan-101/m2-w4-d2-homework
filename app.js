var siteNav = {
    props: ['links'],

    template: `
        <nav class="navbar navbar-expand-lg navbar-light site-navbar">
            <div class="container">
                <a class="navbar-brand" href="#">Food Blog</a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#foodBlogNav"
                    aria-controls="foodBlogNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="foodBlogNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-for="link in links" :key="link.text">
                            <a class="nav-link" :href="link.href">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
};

new Vue({
    el: '#app',

    components: {
        'site-nav': siteNav
    },

    data: {
        selectedAuthor: null,
        showIngredients: false,

        navLinks: [
            { text: 'Home', href: '#' },
            { text: 'Recipes', href: '#' },
            { text: 'Lifestyles', href: '#' },
            { text: 'Videos', href: '#' },
            { text: 'About', href: '#' }
        ],

        recipe: {
            title: 'White Chicken Chili',
            image: 'images/chili.jpg',
            description: 'A cozy chicken chili recipe with beans, green chiles, warm spices, and a creamy finish.',
            prep: '15 minutes',
            cook: '35 minutes',
            serves: '6 people',
            ingredients: [
                'Chicken breast',
                'White beans',
                'Green chiles',
                'Chicken broth',
                'Corn',
                'Onion and garlic',
                'Cumin and coriander',
                'Cream cheese'
            ]
        },

        posts: [
            {
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                comment: 'Was amazing! My Walmart did not have coriander in stock and did not have ground cumin. I used serrano instead of jalapeno. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
                foodieLevel: 'Novice',
                bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
            },
            {
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                comment: 'I just made this soup today and it is so tasty! Did not have corn at home but still turned out very good. It is a winner! I made beef chili for my parents, but since my dad has gout he cannot eat beef; this white chicken chili is perfect for him. Thank you Lisa!',
                foodieLevel: 'Newcomer',
                bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
            },
            {
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                comment: 'I LOVE this White Chicken Chili! You are right, it is a satisfying meal and delicious with toasted bread. Refreshingly different taste than any chicken chili I have made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. It freezes very well.',
                foodieLevel: 'Mentor',
                bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never looked back since!'
            },
            {
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                comment: 'This recipe is dynamite! My partner usually will not eat beans but he finished the whole pot. This is a crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
                foodieLevel: 'Novice',
                bio: 'Food is my passion. So is cooking. I love to experiment and try new things. Invite me over for dinner and I will be there!'
            }
        ]
    },

    methods: {
        showAuthor: function (post) {
            this.selectedAuthor = post;
        },

        closeAuthor: function () {
            this.selectedAuthor = null;
        },

        toggleRecipe: function () {
            this.showIngredients = !this.showIngredients;
        }
    }
});