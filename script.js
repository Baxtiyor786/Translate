const inputLang = document.getElementById('inputLang');
const outputLang = document.getElementById('outputLang');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');

const languages = {
  'af': 'Afrikaans',
  'en': 'English',
  'uz': 'Uzbek',
  'ru': 'Russian',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'zh': 'Chinese',
  'ja': 'Japanese',
};

for (const [code, lang] of Object.entries(languages)) {
  inputLang.innerHTML += `<option value=\"${code}\">${lang}</option>`;
  outputLang.innerHTML += `<option value=\"${code}\">${lang}</option>`;
}

inputLang.value = 'uz';
outputLang.value = 'en';

async function translateText() {
  const text = inputText.value;
  const sourceLang = inputLang.value;
  const targetLang = outputLang.value;

  if (!text.trim()) return;

  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
    const data = await res.json();
    outputText.value = data.responseData.translatedText;
  } catch (err) {
    outputText.value = 'Xatolik yuz berdi!';
  }
}
