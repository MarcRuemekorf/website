const CHARS_UPPER  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const CHARS_LOWER  = 'abcdefghijklmnopqrstuvwxyz';
const CHARS_SYMBOL = '!@#$%^&*-+=?';

const SCRAMBLE_DURATION = 600;
const LINE2_DELAY       = 250;
const CYCLE_INTERVAL    = 4500;
const INITIAL_DELAY     = 3800;

function pickCharsForChar(ch) {
	const isUpper = ch === ch.toUpperCase() && ch !== ch.toLowerCase();
	return isUpper ? CHARS_UPPER : CHARS_LOWER + CHARS_SYMBOL;
}

function scrambleTo(el, targetText, duration, delay = 0, onComplete) {
	const start = performance.now();
	let rafId;

	function tick(now) {
		const elapsed = now - start;

		if (elapsed < delay) { rafId = requestAnimationFrame(tick); return; }

		const progress = Math.min((elapsed - delay) / duration, 1);
		const resolved = Math.floor(progress * targetText.length);

		let result = '';
		for (let i = 0; i < targetText.length; i++) {
			if (targetText[i] === ' ') { result += ' '; continue; }
			if (i < resolved) {
				result += targetText[i];
			} else {
				const chars = pickCharsForChar(targetText[i]);
				result += chars[Math.floor(Math.random() * chars.length)];
			}
		}

		el.textContent = result;

		if (progress < 1) {
			rafId = requestAnimationFrame(tick);
		} else {
			el.textContent = targetText;
			onComplete?.();
		}
	}

	rafId = requestAnimationFrame(tick);
	return () => cancelAnimationFrame(rafId);
}

// ── Hero title ──

const HERO_LINES = [
	{ line1: 'Frontend',  line2: 'developer' },
	{ line1: 'Fullstack', line2: 'developer' },
	{ line1: 'UI/UX',     line2: 'designer'  },
];

const heroLine1 = document.getElementById('title-line1');
const heroLine2 = document.getElementById('title-line2');

let heroIndex      = 0;
let cancelHero1    = null;
let cancelHero2    = null;
let heroIntervalId = null;

function cycleHero() {
	cancelHero1?.();
	cancelHero2?.();
	heroIndex = (heroIndex + 1) % HERO_LINES.length;
	const { line1, line2 } = HERO_LINES[heroIndex];
	cancelHero1 = scrambleTo(heroLine1, line1, SCRAMBLE_DURATION, 0);
	cancelHero2 = scrambleTo(heroLine2, line2, SCRAMBLE_DURATION, LINE2_DELAY);
}

function startHero() {
	cycleHero();
	heroIntervalId = setInterval(cycleHero, CYCLE_INTERVAL);
}

function stopHero() {
	cancelHero1?.();
	cancelHero2?.();
	clearInterval(heroIntervalId);
	heroIntervalId = null;
}

// ── About title ──

const ABOUT_LINES = ['developer', 'designer'];

const aboutLine = document.getElementById('about-title-line');

let aboutIndex      = 0;
let cancelAbout     = null;
let aboutIntervalId = null;

function cycleAbout() {
	cancelAbout?.();
	aboutIndex = (aboutIndex + 1) % ABOUT_LINES.length;
	cancelAbout = scrambleTo(aboutLine, ABOUT_LINES[aboutIndex], SCRAMBLE_DURATION);
}

function startAbout() {
	cycleAbout();
	aboutIntervalId = setInterval(cycleAbout, CYCLE_INTERVAL);
}

function stopAbout() {
	cancelAbout?.();
	clearInterval(aboutIntervalId);
	aboutIntervalId = null;
}

// ── Shared lifecycle ──

function startAll() {
	if (heroLine1 && heroLine2) startHero();
	if (aboutLine) startAbout();
}

function stopAll() {
	stopHero();
	stopAbout();
}

document.addEventListener('visibilitychange', () => {
	if (document.hidden) stopAll(); else startAll();
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	setTimeout(startAll, INITIAL_DELAY);
}
