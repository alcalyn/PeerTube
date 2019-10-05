import * as Sequelize from 'sequelize'

async function up (utils: {
  transaction: Sequelize.Transaction,
  queryInterface: Sequelize.QueryInterface,
  sequelize: Sequelize.Sequelize,
  db: any
}): Promise<void> {
  {
    const transaction = utils.transaction
    const query = 'ALTER TABLE "videoComment" ADD COLUMN "deletedAt" TIMESTAMP WITH TIME ZONE NULL'

    await utils.sequelize.query(query, { transaction })
  }
}

function down (options) {
  throw new Error('Not implemented.')
}

export {
  up,
  down
}
