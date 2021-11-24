import { Deparser, deparse } from 'pgsql-deparser';
import { enums } from 'pgsql-enums';
import { parseQuerySync, parsePlPgSQLSync as parseFunction } from 'libpg-query';
import PgQuery from 'pg-query-emscripten';

export const parse = (sql) => {
  if (!sql) throw new Error('no SQL provided to parser');
  const result = PgQuery.parse(sql); //parseQuerySync(sql);
  return result.parse_tree.map((s)=>{
    return {
      ...s
    };
  });
};

export { deparse, Deparser, enums, parseFunction };
