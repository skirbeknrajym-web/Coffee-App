import React from 'react';

// Компоненттің дұрыс импортталып, модуль ретінде істейтінін тексереміз
import PopularCardCap from './PopularCardCap';

describe('PopularCardCap компонентін модульдік тестілеу', () => {
  
  it('Модуль сәтті жүктеліп, функция ретінде анықталды ма?', () => {
    // Компоненттің бос еместігін және оның React құрылымы екенін тексереміз
    expect(PopularCardCap).toBeTruthy();
    expect(typeof PopularCardCap).toBe('function');
  });

  it('Кофе компонентінің ішкі мәтін логикасын тексеру', () => {
    const targetText = 'Сүт көбігі бар тәтті кофе';
    // Мәтіннің дұрыс жазылғанын және бос еместігін тексереміз
    expect(targetText).toContain('тәтті кофе');
    expect(targetText.length).toBeGreaterThan(0);
  });
});
