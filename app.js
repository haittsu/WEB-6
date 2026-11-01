$(document).ready(function () {
  console.log("jQuery is ready!");

  const lessons = [
    {
      title: "Setup",
      short: "Get jQuery ready",
      intro: "Connect the jQuery library, wait for the DOM, and make your first console check.",
      icon: "⌘"
    },
    {
      title: "Selectors & CSS",
      short: "Find and style elements",
      intro: "Select by ID, class, and tag. Update copy with .text() and .html(), then style an element with .css().",
      icon: "◎"
    },
    {
      title: "Visibility Methods",
      short: "Hide, show, toggle",
      intro: "Control an element’s visibility with the three everyday jQuery visibility methods.",
      icon: "◉"
    },
    {
      title: "Fade Methods",
      short: "Fade images in and out",
      intro: "Use opacity transitions to reveal, hide, or toggle a landscape image.",
      icon: "◌"
    },
    {
      title: "Slide Methods",
      short: "Build a collapsible panel",
      intro: "Slide content up, down, and back and forth with a compact set of controls.",
      icon: "⌄"
    },
    {
      title: "Add & Remove Elements",
      short: "Change a list on the fly",
      intro: "Append a new list item, prepend one to the top, and remove the last item.",
      icon: "+"
    },
    {
      title: "Modifying Attributes",
      short: "Update src and href",
      intro: "Change an image source and a link destination in response to a click.",
      icon: "↗"
    },
    {
      title: "Form Interaction",
      short: "See input as you type",
      intro: "Read input values with .val() and safely display them with .text().",
      icon: "⌨"
    },
    {
      title: "Basic Animation",
      short: "Move and resize a square",
      intro: "Animate width, height, and position with a single .animate() call.",
      icon: "□"
    },
    {
      title: "Sequential Animations",
      short: "Chain motion step by step",
      intro: "Let jQuery’s animation queue move, drop, shrink, and reset the box in sequence.",
      icon: "↝"
    },
    {
      title: "Combined Animation",
      short: "Animate several properties",
      intro: "Combine opacity, size, and movement in one coordinated animation.",
      icon: "✳"
    },
    {
      title: "Interactive jQuery Project",
      short: "Explore the lightbox gallery",
      intro: "A polished mini project: thumbnails fade into view and open in an enlarged lightbox.",
      icon: "▧"
    }
];
  
    const pageUrl = (i) => `task.html?lesson=${i}`;
  const nav = lessons.map((lesson, i) => `<a class="nav-link ${i === 11 ? "nav-project" : ""}" href="${pageUrl(i)}" aria-label="Task ${i}: ${lesson.title}">${i === 11 ? "Project" : String(i).padStart(2, "0")}</a>`).join("");
  $("#main-nav").html(nav);

  if ($("#roadmap-grid").length) {
    $("#roadmap-grid").html(lessons.map((lesson, i) => `<a class="roadmap-card" href="${pageUrl(i)}"><div class="card-top"><span class="card-number">LESSON ${String(i).padStart(2, "0")}</span><span class="card-icon">${lesson.icon}</span></div><h3>${lesson.title}</h3><p>${lesson.short}</p><span class="card-arrow" aria-hidden="true">↗</span></a>`).join(""));
    $(".hero-actions .button-primary").attr("href", pageUrl(0));
    $(".header-cta, .project-banner .button").attr("href", pageUrl(11));
  }

  const taskMarkup = [
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">DOM READY CHECK</span><span class="ready-badge"><i></i> READY</span></div><h3>jQuery is ready!</h3><p>The document-ready callback runs after the page structure is available. Open your browser console to see the confirmation.</p><div class="demo-surface"><span class="sample-chip">The page is ready for interaction.</span></div><div class="code-snippet"><span class="comment">// Wait until the document is ready</span><br>$(<span class="string">document</span>).<span class="method">ready</span>(<span class="keyword">function</span> () {<br>&nbsp; console.log(<span class="string">"jQuery is ready!"</span>);<br>});</div></section><section class="concept-card"><h3>Include the library</h3><p>This project loads jQuery 3.7.1 from the official CDN before the local app.js file, so every demo can use the $ shortcut.</p></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">SELECTOR PLAYGROUND</span><span class="lab-label">ID · CLASS · TAG</span></div><h3 id="selector-heading">A tiny content makeover</h3><p class="selector-copy">Each button targets a different kind of selector.</p><div class="sample-row"><span class="sample-chip selector-tag">Tag target</span><span class="sample-chip selector-class">Class target</span><span class="sample-chip" id="selector-id">ID target</span></div><div class="control-row"><button class="demo-button" id="change-text">Change with .text()</button><button class="demo-button secondary" id="change-html">Change with .html()</button><button class="demo-button coral" id="change-css">Style with .css()</button></div><div class="demo-output" id="selector-output" aria-live="polite">Pick a selector action to see the change.</div><div class="code-snippet">$(<span class="string">"#selector-id"</span>).<span class="method">text</span>(<span class="string">"Updated!"</span>);<br>$(<span class="string">".selector-class"</span>).<span class="method">html</span>(<span class="string">"&lt;strong&gt;HTML&lt;/strong&gt;"</span>);<br>$(<span class="string">"span"</span>).<span class="method">css</span>(<span class="string">"color"</span>, <span class="string">"#4668f2"</span>);</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">VISIBILITY CONTROLS</span><span class="lab-label">HIDE · SHOW · TOGGLE</span></div><h3>Give this note a little breathing room</h3><p>Hide the note, bring it back, or let jQuery decide which state comes next.</p><div class="control-row"><button class="demo-button coral" id="hide-note">Hide</button><button class="demo-button mint" id="show-note">Show</button><button class="demo-button secondary" id="toggle-note">Toggle</button></div><div class="demo-surface" id="visibility-note"><span class="sample-chip highlight">Hello there! I can disappear and return.</span></div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">FADE CONTROL</span><span class="lab-label">FADE IN · OUT · TOGGLE</span></div><h3>Soft light, softer transitions</h3><p>Use the three buttons to control this image’s opacity animation.</p><div class="control-row"><button class="demo-button mint" id="fade-in">Fade in</button><button class="demo-button coral" id="fade-out">Fade out</button><button class="demo-button secondary" id="fade-toggle">Fade toggle</button></div><img class="image-demo" id="fade-image" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85" alt="A tranquil mountain lake reflecting the evening sky"><div class="demo-output" id="fade-status" aria-live="polite">The photo is ready to fade.</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">SLIDE CONTROL</span><span class="lab-label">SLIDE UP · DOWN · TOGGLE</span></div><h3>Little details, tucked away</h3><p>Slide the panel out of view, bring it back, or switch between both states.</p><div class="control-row"><button class="demo-button coral" id="slide-up">Slide up</button><button class="demo-button mint" id="slide-down">Slide down</button><button class="demo-button secondary" id="slide-toggle">Slide toggle</button></div><div class="slide-panel" id="slide-panel"><strong>Inside the panel</strong><br>Motion helps organize content without sending the reader somewhere else.</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">DYNAMIC LIST</span><span class="lab-label">APPEND · PREPEND · REMOVE</span></div><h3>Build a tiny inspiration list</h3><p>Add a thought to the bottom or the top. Remove the newest item when you’re ready.</p><div class="control-row"><input class="text-input" id="item-input" type="text" placeholder="Write a small idea…" aria-label="New list item"><button class="demo-button" id="append-item">Append item</button><button class="demo-button secondary" id="prepend-item">Prepend item</button><button class="demo-button coral" id="remove-item">Remove last</button></div><ul class="demo-list" id="idea-list"><li>Curiosity makes good code <span>01</span></li><li>Small steps still move you forward <span>02</span></li><li>Try it, then try it differently <span>03</span></li></ul><div class="demo-output" id="list-count" aria-live="polite">3 ideas in your list.</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">ATTRIBUTE SWITCHER</span><span class="lab-label">.ATTR( SRC / HREF )</span></div><h3>Give links and images a new destination</h3><p>Switch the photo source, then update the destination behind the link.</p><img class="image-demo" id="attribute-image" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85" alt="Still water beneath mountain peaks"><div class="control-row"><button class="demo-button" id="swap-image">Change image src</button><a class="demo-button secondary" id="dynamic-link" href="https://api.jquery.com/attr/" target="_blank" rel="noopener">Open current link ↗</a><button class="demo-button coral" id="swap-link">Change link href</button></div><div class="demo-output" id="attribute-output" aria-live="polite">Current href: api.jquery.com/attr/</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">LIVE FORM</span><span class="lab-label">.VAL() → .TEXT()</span></div><h3>Say hello as you type</h3><p>Your text appears below the form without refreshing the page.</p><form id="live-form" autocomplete="off"><div class="field"><label class="input-label" for="visitor-name">Name</label><input class="text-input live-input" id="visitor-name" type="text" placeholder="e.g. Alex" maxlength="40"></div><div class="field"><label class="input-label" for="visitor-email">Email</label><input class="text-input live-input" id="visitor-email" type="email" placeholder="alex@example.com" maxlength="80"></div></form><div class="demo-surface"><span class="lab-label">LIVE PREVIEW</span><p id="live-preview" class="demo-output" aria-live="polite">Your name and email will appear here.</p></div><div class="code-snippet">$(<span class="string">".live-input"</span>).<span class="method">on</span>(<span class="string">"input"</span>, <span class="keyword">function</span> () {<br>&nbsp; $(<span class="string">"#live-preview"</span>).<span class="method">text</span>($(<span class="keyword">this</span>).<span class="method">val</span>());<br>});</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">ANIMATION STAGE</span><span class="lab-label">.ANIMATE()</span></div><h3>A square with somewhere to go</h3><p>Animate width, height, and position together. Reset it to run the demo again.</p><div class="control-row"><button class="demo-button" id="animate-basic">Animate the square</button><button class="demo-button secondary" id="reset-animation">Reset stage</button></div><div class="anim-stage"><div class="anim-box" id="basic-box"></div></div><div class="demo-output">A single .animate() call updates size and left position.</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">ANIMATION QUEUE</span><span class="lab-label">MOVE → DROP → SHRINK → RESET</span></div><h3>Four steps, one smooth sequence</h3><p>Each queued animation starts when the previous one completes.</p><div class="control-row"><button class="demo-button" id="animate-sequence">Play sequence</button><button class="demo-button secondary" id="reset-animation">Reset stage</button></div><div class="anim-stage"><div class="anim-box" id="sequence-box"></div></div><div class="code-snippet">$box.<span class="method">animate</span>({ left: 240 }).<span class="method">animate</span>({ top: 130 })<br>&nbsp; .<span class="method">animate</span>({ width: 34, height: 34 })<br>&nbsp; .<span class="method">animate</span>({ left: 25, top: 25, width: 62, height: 62 });</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">ONE COORDINATED MOTION</span><span class="lab-label">OPACITY · SIZE · POSITION</span></div><h3>Make every property move together</h3><p>This demo combines four CSS properties in a single animation object.</p><div class="control-row"><button class="demo-button" id="animate-combined">Play combined animation</button><button class="demo-button secondary" id="reset-animation">Reset stage</button></div><div class="anim-stage"><div class="anim-box" id="combined-box"></div></div><div class="code-snippet">$box.<span class="method">animate</span>({ left: 230, top: 125,<br>&nbsp; width: 36, height: 36, opacity: 0.45 }, 1000);</div></section>`,
    `<section class="lab-card"><div class="lab-header"><span class="lab-label">THE MINI PROJECT · IMAGE GALLERY</span><span class="ready-badge"><i></i> CLICK TO ENLARGE</span></div><h3>Somewhere worth slowing down</h3><p>Six places, a little fade, and a lightbox for the details. Click any thumbnail to see it up close.</p><div class="gallery-grid">${[
      ["photo-1470770841072-f978cf4d019e", "Quiet waters"], ["photo-1500530855697-b586d89ba3ee", "Wide open"], ["photo-1470252649378-9c29740c9fa8", "Golden hour"], ["photo-1441974231531-c6227db76b6e", "Into the woods"], ["photo-1501785888041-af3ef285b470", "Alpine air"], ["photo-1472396961693-142e6e269027", "Wild paths"]
    ].map(([id, label]) => `<figure class="gallery-tile"><img src="https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80" alt="${label} landscape"><figcaption class="gallery-caption">${label} <span>↗</span></figcaption></figure>`).join("")}</div><div class="demo-output" id="gallery-status" aria-live="polite">6 photos · select one to open the lightbox.</div></section><section class="concept-card"><h3>What this project demonstrates</h3><p>jQuery selectors, delegated click events, .fadeIn(), .attr(), and clean lightbox state management in a compact, interactive experience.</p></section>`
  ];

  const params = new URLSearchParams(window.location.search);
  const lessonIndex = Number(params.get("lesson") || 0);
  const index = Number.isInteger(lessonIndex) && lessonIndex >= 0 && lessonIndex < lessons.length ? lessonIndex : 0;
  if ($("#lesson-view").length) {
    const lesson = lessons[index];
    const group = index === 11 ? "MINI PROJECT" : index === 0 ? "PART 1 · GETTING STARTED" : index < 5 ? "PART 2 · JQUERY EFFECTS" : index < 8 ? "PART 3 · DOM MANIPULATION" : "PART 4 · ANIMATIONS";
    $("#lesson-view").html(`<p class="lesson-kicker">${group} / TASK ${String(index).padStart(2, "0")}</p><h1 class="lesson-title">${lesson.title}</h1><p class="lesson-intro">${lesson.intro}</p>${taskMarkup[index]}<nav class="lesson-pagination" aria-label="Lesson navigation">${index > 0 ? `<a class="page-step" href="${pageUrl(index - 1)}"><span>← PREVIOUS</span>${lessons[index - 1].title}</a>` : `<a class="page-step" href="index.html"><span>← BACK TO</span>All lessons</a>`}${index < 11 ? `<a class="page-step next" href="${pageUrl(index + 1)}"><span>NEXT LESSON →</span>${lessons[index + 1].title}</a>` : `<a class="page-step next" href="index.html"><span>FINISH</span>Back to roadmap ↗</a>`}</nav>`);
    $("#lesson-rail-nav").html(lessons.map((item, i) => `<a class="rail-link ${i === index ? "active" : ""}" href="${pageUrl(i)}">${String(i).padStart(2, "0")} &nbsp; ${item.title}</a>`).join(""));
    $(".main-nav .nav-link").eq(index).addClass("active");
    document.title = `${lesson.title} | jQuery Studio`;
  }

  $("#change-text").on("click", function () {
    $("#selector-id").text("ID selector updated with .text()");
    $("#selector-output").text("Changed the element selected with #selector-id.");
  });

  $("#change-html").on("click", function () {
    $(".selector-class").html("<strong>Class updated with .html()</strong>");
    $("#selector-output").text("Inserted a safe, fixed HTML snippet into the class target.");
  });

  $("#change-css").on("click", function () {
    $(".selector-tag").css({
      color: "#4668f2",
      borderColor: "#8798ff",
      backgroundColor: "#edf0ff"
    });
    $("#selector-output").text("Styled every matching span tag with .css().");
  });

  $("#hide-note").on("click", function () {
    $("#visibility-note").hide(250);
  });

  $("#show-note").on("click", function () {
    $("#visibility-note").show(250);
  });

  $("#toggle-note").on("click", function () {
    $("#visibility-note").toggle(250);
  });

  $("#fade-in").on("click", function () {
    $("#fade-image").fadeIn(500);
    $("#fade-status").text("The photo faded in.");
  });

  $("#fade-out").on("click", function () {
    $("#fade-image").fadeOut(500);
    $("#fade-status").text("The photo faded out.");
  });

  $("#fade-toggle").on("click", function () {
    $("#fade-image").fadeToggle(500);
  });

  $("#slide-up").on("click", function () {
    $("#slide-panel").slideUp(350);
  });

  $("#slide-down").on("click", function () {
    $("#slide-panel").slideDown(350);
  });

  $("#slide-toggle").on("click", function () {
    $("#slide-panel").slideToggle(350);
  });

  function addIdea(position) {
    const text = $.trim($("#item-input").val()) || "A new little idea";
    const $item = $("<li>").text(text);
    const count = $("#idea-list li").length + 1;

    $item.append($(`<span>${String(count).padStart(2, "0")}</span>`));

    if (position === "top") {
      $("#idea-list").prepend($item);
    } else {
      $("#idea-list").append($item);
    }

    $("#item-input").val("");
    $("#list-count").text(`${$("#idea-list li").length} ideas in your list.`);
  }

  $("#append-item").on("click", function () {
    addIdea("bottom");
  });

  $("#prepend-item").on("click", function () {
    addIdea("top");
  });

  $("#remove-item").on("click", function () {
    $("#idea-list li:last-child").remove();
    $("#list-count").text(`${$("#idea-list li").length} ideas in your list.`);
  });

  $("#swap-image").on("click", function () {
    const $image = $("#attribute-image");
    const first = "photo-1470770841072-f978cf4d019e";
    const second = "photo-1500530855697-b586d89ba3ee";
    const next = $image.attr("src").includes(first) ? second : first;

    $image.attr(
      "src",
      `https://images.unsplash.com/${next}?auto=format&fit=crop&w=1000&q=85`
    );
    $("#attribute-output").text("The image src attribute was updated.");
  });

  $("#swap-link").on("click", function () {
    const $link = $("#dynamic-link");
    const isApi = $link.attr("href").includes("api.jquery.com");
    const next = isApi
      ? "https://www.w3schools.com/jquery/"
      : "https://api.jquery.com/attr/";

    $link
      .attr("href", next)
      .text(isApi ? "Open W3Schools jQuery ↗" : "Open jQuery API ↗");
    $("#attribute-output").text(`Current href: ${next.replace("https://", "")}`);
  });

  $(".live-input").on("input", function () {
    const name = $("#visitor-name").val();
    const email = $("#visitor-email").val();
    const preview = [name, email].filter(Boolean).join(" · ");

    $("#live-preview").text(
      preview ? `Hello, ${preview}` : "Your name and email will appear here."
    );
  });

  $("#live-form").on("submit", function (event) {
    event.preventDefault();
  });

  $("#reset-animation").on("click", function () {
    $(".anim-box")
      .stop(true, true)
      .css({ left: 25, top: 25, width: 62, height: 62, opacity: 1 });
  });

  $("#animate-basic").on("click", function () {
    $("#basic-box")
      .stop(true)
      .animate({ width: 105, height: 105, left: 210 }, 800);
  });

  $("#animate-sequence").on("click", function () {
    const $box = $("#sequence-box")
      .stop(true, true)
      .css({ left: 25, top: 25, width: 62, height: 62 });

    $box
      .animate({ left: 220 }, 550)
      .animate({ top: 140 }, 550)
      .animate({ width: 36, height: 36 }, 450)
      .animate({ left: 25, top: 25, width: 62, height: 62 }, 600);
  });

  $("#animate-combined").on("click", function () {
    const $box = $("#combined-box")
      .stop(true, true)
      .css({ left: 25, top: 25, width: 62, height: 62, opacity: 1 });

    $box.animate(
      { left: 220, top: 125, width: 38, height: 38, opacity: 0.5 },
      1000
    );
  });

  $(".gallery-tile img").hide().each(function (index) {
    $(this).delay(index * 90).fadeIn(450);
  });

  $(document).on("click", ".gallery-tile", function () {
    const $image = $(this).find("img");
    const src = $image.attr("src").replace("w=700", "w=1400");
    const alt = $image.attr("alt");
    const $lightbox = $(
      `<div class="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged gallery photo">
        <button class="lightbox-close" aria-label="Close image">×</button>
        <img src="${src}" alt="${alt}">
      </div>`
    );

    $("body").append($lightbox.hide().fadeIn(180));
    $("#gallery-status").text(`${alt} · press Escape or click × to close.`);
    $lightbox.find(".lightbox-close").trigger("focus");
  });

  $(document).on("click", ".lightbox", function (event) {
    if (event.target === this || $(event.target).hasClass("lightbox-close")) {
      $(this).fadeOut(180, function () {
        $(this).remove();
      });
    }
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape") {
      $(".lightbox").fadeOut(180, function () {
        $(this).remove();
      });
    }
  });
});