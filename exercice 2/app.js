function testForm()
{
    var login = document.getElementById('login');
    var password = document.getElementById('mdp');

    if (login.value == 'web' && password.value == '1234')
    {
        alert('Vous êtes connecté');
    }
    else
        {
            alert('Login ou Mot de Passe incorrect');
        }
}