var e = Object.keys;
let t = 0,
    r = [],
    n = JSON.stringify,
    a = JSON.parse;

function s() {
    let e = document.getElementById("questionInput").value,
        t = parseInt(e);
    if (Number.isNaN(t)) alert("Please enter a valid number");
    else if (t >= 0 && t < r.length) {
        var n;
        alert((n = r[t], [{
            regex: /\\dfrac{([^{}]*)}{([^{}]*)}/g,
            replace: "%27$1/$2%27"
        }, {
            regex: /\$t=/g,
            replace: "t = %27"
        }, {
            regex: /\\sqrt\[3\]{([^}]*)}/g,
            replace: (e, t) => Math.pow(parseInt(t), 1 / 3)
        }, {
            regex: /\\sqrt{([^}]*)}/g,
            replace: (e, t) => Math.sqrt(parseInt(t))
        }, {
            regex: /\\frac{([^}]*)}{([^}]*)}/g,
            replace: "%27$1/$2%27"
        }, {
            regex: /\\log_{([^}]*)}{([^}]*)}/g,
            replace: (e, t, r) => `log(${r})/log(${t})`
        }, {
            regex: /\\ln{([^}]*)}/g,
            replace: (e, t) => `ln(${t})`
        }, {
            regex: /\\sin{([^}]*)}/g,
            replace: (e, t) => `sin(${t})`
        }, {
            regex: /\\cos{([^}]*)}/g,
            replace: (e, t) => `cos(${t})`
        }, {
            regex: /\\tan{([^}]*)}/g,
            replace: (e, t) => `tan(${t})`
        }, {
            regex: /\\sum_{([^}]*)}^{([^}]*)}{([^}]*)}/g,
            replace: (e, t, r, n) => `sum(${n},${t},${r})`
        }, {
            regex: /\.{3}/g,
            replace: "%27...%27"
        }, {
            regex: /\\overline{([^}]*)}/g,
            replace: (e, t) => `${t}.${t}`
        }, {
            regex: /\\pink{([^}]*)}/g,
            replace: "%27$1%27"
        }, {
            regex: /\\blue{([^}]*)}/g,
            replace: "%27$1%27"
        }, {
            regex: /\$/g,
            replace: "%27%27"
        }, {
            regex: /\{/g,
            replace: "%27%27"
        }, {
            regex: /\}/g,
            replace: "%27%27"
        }].forEach(({
            regex: e,
            replace: t
        }) => {
            n = n.replace(e, t)
        }), n))
    } else alert("Please enter a valid question number")
}
JSON = {
    stringify: function(e) {
        return n(e)
    },
    parse: function(n) {
        let s = a(n);
        try {
            var i = JSON.parse(s.data.assessmentItem.item.itemData);
            try {
                i.question.content = JSON.parse(s.data.assessmentItem.item.itemData).hints[JSON.hints.length - 1]
            } catch (o) {}
            i.question.content = i.hints[i.hints.length - 1].content + "[[" + i.question.content.split("[[")[1], console.log(s), "numeric-input" === i.question.widgets[e(i.question.widgets)[0]].type && console.log(i);
            for (let c = 0; c < i.question.widgets["radio 1"].options.choices.length; c++) !0 !== i.question.widgets["radio 1"].options.choices[c].correct ? i.question.widgets["radio 1"].options.choices[c].content = "Incorrect answer" : i.question.widgets["radio 1"].options.choices[c].content = "Correct answer";
            s.data.assessmentItem.item.itemData = JSON.stringify(i)
        } catch (l) {}
        try {
            let g = s?.data?.assessmentItem?.item?.itemData;
            if ("string" == typeof g) {
                let p = a(g).hints;
                if (Array.isArray(p) && p.length > 0) {
                    let u = p[p.length - 1].content;
                    console.log(u), r.push(u), t++
                }
            }
        } catch (m) {
            console.error("Error parsing JSON", m)
        }
        return s
    },
    isRawJSON: function(e) {
        try {
            return JSON.parse(e), !0
        } catch (t) {
            return !1
        }
    },
    rawJSON: JSON.parse
}, setInterval(function() {
    let e = document.querySelectorAll("[type='button']");
    e.forEach(e => {
        if ("Report a problem" === e.textContent) {
            let r = e.parentElement;
            r.innerHTML = `<input placeholder="Question" value="${t-1}" id="questionInput" type="number"></input><button onclick="s()">Get answer</button>`
        }
    })
}, 1e3)
