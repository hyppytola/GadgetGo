import React from 'react'


function HomePage() {
    return (
<div>

<div className="home-hero">
                    <div className="home-hero-message">
                        {/* <h1>now open in Seattle!</h1> */}
                    </div>
                    <span>Photo by <a href="https://unsplash.com/@fng137" target="new">Felipe Galvan</a></span>
                </div>

        <div className="about">
                <h1>About</h1>
                <p>
                GadgetGo online hardware store is a platform for online purchases of various electronic devices, where everyone has the opportunity to purchase devices, view reviews of the desired product. 
                </p>
                <p>
                New digital technologies, the most fashionable gadgets, innovative electronics products – in one place you can find everything that you need. In GadjetGo online store you will find modern smartphones, computers, printers, laptops, and much more
                </p>
                <p>
                    Keep in mind that this isn't a fully functioning online storefront (yet): there's a bug in the shopping cart/bag, there are no sizing options, the contact form isn't fully functional, and there is no backend or complete checkout process. I'm sure there are other problems that I haven't unearthed. Despite this, I'm extremely satisfied with the results and what I've learned so far. I plan to revisit this project in the future to add a backend and make it fully functional.
                </p>
                <p>
                    All shop content (images & item names) was taken from <a href="https://madewell.com" target="new">Madewell</a>. Without their items, I would have had a pretty tough time curating a store.
                </p>
                <p>
                    So, what went into this project?
                    <ul>
                        <li><a href="https://reactjs.org/" target="new">React</a></li>
                        <li><a href="https://redux.js.org/" target="new">Redux</a></li>
                        <li><a href="https://github.com/rt2zz/redux-persist" target="new">redux-persist</a></li>
                        <li><a href="https://github.com/ReactTraining/react-router" target="new">react-router</a></li>
                        <li><a href="https://github.com/adamrisberg/react-image-magnifiers" target="new">react-image-magnifiers</a></li>
                        <li><a href="https://lodash.com/" target="new">Lodash</a></li>
                        <li><a href="https://github.com/jaredpalmer/formik" target="new">Formik</a></li>
                        <li><a href="https://github.com/jquense/yup" target="new">Yup</a></li>
                        <li><a href="https://fontawesome.com/" target="new">Font Awesome</a></li>
                        <li>And a whole lot of CSS</li>
                    </ul>
                </p>
                <p>
                    Thanks for stopping by.
                </p>
            </div>
            </div>
    )
}

export default HomePage