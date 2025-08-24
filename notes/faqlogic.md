_Used Gemini to create this summary_

[W3Schools](https://www.w3schools.com/howto/howto_js_accordion.asp)

[MDN - Accordion with just HTML](https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/)

---

### The Ultimate JS Accordion Cheat Sheet 🚀

The goal was to create an accordion menu where only one item can be open at a time. The main challenges we found were related to how to select the right elements, when the code should run, and the best logic to control what opens and closes.

Here are the essential topics for you to master this for good:

#### Topic 1: The Soloist vs. The Whole Crew (`querySelector` vs. `querySelectorAll`)

* **`querySelector`**: Grabs only the **FIRST** element it finds. It's like sending a DM to the very first person on your contacts list.
    * *When to use it?* When you are absolutely sure there's only one of that element, or when you specifically want just the first one.
* **`querySelectorAll`**: Grabs **ALL** elements that match the selector and puts them into a list (a `NodeList`). It's like pinging `@everyone` in a Discord channel.
    * *When to use it?* Essential for our accordion, as we need a list of all the titles and all the content panels to control them individually.

#### Topic 2: The Party is on Saturday! (Code Inside vs. Outside an `addEventListener`)

* **Code Outside the Listener**: Runs **as soon as the page loads, and only once**. It's like the eager guest who shows up for a Saturday party on Monday. If you put your "close all" logic here, it runs once and never again.
* **Code Inside the Listener**: Only runs **WHEN the event happens** (in our case, the 'click'). This is the code that shows up right on time for the party.
    * *Golden Rule:* All logic for opening, closing, checking states, etc., **MUST be inside** the `.addEventListener('click', ...)` so that it executes every time the user interacts with an item.

#### Topic 3: Control is Everything (`add`/`remove` vs. `toggle`)

* **`.toggle()`**: It's like a "selfish" light switch. It only cares about its own state (if it's on, it turns off; if it's off, it turns on). It's great for a standalone "Read More" button that doesn't affect anything else.
* **`.add()` / `.remove()`**: These give you total control, like an orchestra conductor. They are perfect for a group of elements where an action on one needs to affect all the others.
    * **The Winning Logic (The "Reset and Set" Pattern):** The safest way to ensure only one item stays open is:
        1.  **Reset:** When any item is clicked, first loop through **ALL** items and use `.remove('active')` to ensure everything is closed.
        2.  **Set:** After the general reset, use `.add('active')` **ONLY** on the specific item you want to open.

#### Topic 4: Making it Smooth (CSS Animation)

* **`display` is Abrupt**: Changing from `display: none` to `display: block` makes the content "pop" into view instantly, without a transition.
* **Animation with `max-height`**: This is the most popular technique for a smooth "slide down" effect.
    * In your CSS, the hidden content should have `max-height: 0` and `overflow: hidden`.
    * The `.active` class changes the `max-height` to a value large enough to fit your content (e.g., `max-height: 500px`).
    * The magic happens with the `transition: max-height 0.3s ease;` property, which creates the smooth animation.

---

### Key Takeaways 🧠

* To control a group, use **`querySelectorAll`**.
* All click-related logic goes **INSIDE** the **`addEventListener`**.
* For accordions, the best pattern is: **first reset all (`.remove`), then activate one (`.add`)**.
* For a polished animation, use **`max-height` + `transition`** in your CSS.