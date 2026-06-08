describe('Cypress Heroes', () => {

  // LOGIN
  describe('Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('CT001 - Login com credenciais válidas', () => {
      cy.get('button').contains('Login').click()
      cy.get('input[type="email"]').type('test@test.com')
      cy.get('input[type="password"]').type('test123')
      cy.get('button').contains('Sign in').click()
      cy.contains('button', 'Logout').should('be.visible')
    })

    it('CT002 - Login com credenciais inválidas', () => {
      cy.get('button').contains('Login').click()
      cy.get('input[type="email"]').type('invalido@test.com')
      cy.get('input[type="password"]').type('senhaerrada')
      cy.get('button').contains('Sign in').click()
      cy.contains('Invalid email or password').should('be.visible')
    })

    it('CT003 - Login com campos em branco', () => {
      cy.get('button').contains('Login').click()
      cy.get('button').contains('Sign in').click()
      cy.get('input[type="email"]').should('be.visible').and('have.value', '')
      cy.get('input[type="password"]').should('be.visible').and('have.value', '')
    })
  })

  // LOGOUT
  describe('Logout', () => {
    beforeEach(() => {
      cy.login('test@test.com', 'test123')
      cy.visit('/')
    })

    it('CT004 - Logout com sucesso', () => {
      cy.contains('button', 'Logout').click()
      cy.contains('button', 'Login').should('be.visible')
    })
  })

  // CURTIR
  describe('Curtir Herói', () => {
    it('CT005 - Curtir herói sem estar logado', () => {
      cy.visit('/')
      cy.get('button[data-cy="like"]').first().click()
      cy.contains('You must log in to like').should('be.visible')
      cy.get('.gap-4 > .gap-2 > .undefined').click()
    })

    it('CT006 - Curtir herói logado', () => {
      cy.login('test@test.com', 'test123')
      cy.visit('/')
      cy.get('button[data-cy="like"]').first().as('likeBtn')
      cy.get('[data-cy="fans"]').first().invoke('text').then((fansBefore) => {
      cy.get('@likeBtn').click()
      cy.get('[data-cy="fans"]').first().invoke('text').should((fansAfter) => {
        expect(Number(fansAfter)).to.be.greaterThan(Number(fansBefore))
      })
      })
    })
  })

  // CONTRATAR
  describe('Contratar Herói', () => {
    it('CT007 - Contratar herói sem estar logado', () => {
      cy.visit('/')
      cy.get('button[data-cy="money"]').first().click()
      cy.contains('You must log in to hire this hero').should('be.visible')
      cy.get('.gap-4 > .gap-2 > .undefined').click()
    })

    it('CT008 - Contratar herói logado', () => {
      cy.login('test@test.com', 'test123')
      cy.visit('/')
      cy.get('button[data-cy="money"]').first().click()
      cy.contains('button', 'Yes').click()
      cy.contains('button', 'Logout').should('be.visible')
    })
  })

  // ADMIN - HERÓIS
  describe('Gerenciamento de Heróis (Admin)', () => {
    beforeEach(() => {
      cy.login('admin@test.com', 'test123')
      cy.visit('/')
    })

    it('CT009 - Criar novo herói (admin)', () => {
      cy.contains('button', 'New Hero').click()
      cy.get('[data-cy="nameInput"]').type('Hero Test')
      cy.get('[data-cy="priceInput"]').type('10')
      cy.get('[data-cy="fansInput"]').type('2')
      cy.get('[data-cy="savesInput"]').type('1')
      cy.get('[data-cy="powersSelect"]').select('4')
      cy.contains('button', 'Submit').click()
      cy.contains('Hero Test').should('be.visible')
    })

    it('CT010 - Editar herói (admin)', () => {
      cy.createHero().then((hero: any) => {
        cy.visit('/')
        cy.get('[data-cy="pencil"]').first().click()
        cy.get('[data-cy="nameInput"]').clear().type('Hero Editado')
        cy.contains('button', 'Submit').click()
        cy.contains('Hero Editado').should('be.visible')
      })
    })

    it('CT011 - Excluir herói (admin)', () => {
      cy.createHero().then((hero: any) => {
        cy.visit('/')
        cy.get('[data-cy="trash"]').first().click()
        cy.contains('button', 'Yes').click()
        cy.contains('[data-cy="name"]').should('not.exist')
      })
    })
  })
})