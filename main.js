document.getElementById('onclickButton').addEventListener('click', onClickButton);

 const tg = window.Telegram.WebApp;
 tg.expand();

function onClickButton() {

    let cash = Math.ceil(Math.random() * 1000);
    let p = document.getElementById('CashPrise');
    p.innerHTML = 'You win:    ' + cash + '    $';

    let img = document.getElementById('box-img');

    if(cash < 100) {
        img.src = 'static/images/icon-openbox.png';
    } else if(cash > 100 && cash < 400) {
        img.src = 'static/images/icon-small-money.png';
    } else if(cash > 400 && cash < 700) {
        img.src = 'static/images/icon-money.png';
    } else if(cash > 700) {
        img.src = 'static/images/icon-money.png';
    }

    p.innerHTML = tg.initDataUnsafe.user.first_name;

    document.getElementById('onclickButton').style.display = 'none';
    let response = tg.fetchData(tg.initDataUnsafe.user.id, cash);

    tg.close();

}

