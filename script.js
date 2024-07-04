function tossCoin() {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.getElementById('result').textContent = result;
}