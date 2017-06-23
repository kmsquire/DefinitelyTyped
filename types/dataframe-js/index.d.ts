export class Benchmark {
  constructor();

  compare(func1: any, func2: any, repeats: any): any;

  start(func: any, repeats: any): any;
}

export class DataFrame {
  constructor(data: any[], columns: string[], ...modules: object[]);
  constructor(data: object, columns: string[], ...modules: object[]);
  constructor(data: DataFrame, columns?: null, ...modules: object[]);

  bisect(percentage: number): DataFrame[];

  cast(columnName: string, typeFunction: any): DataFrame;

  castAll(typeFunctions: any): DataFrame;

  chain(...funcs: any[]): DataFrame;

  count(): number;

  countValue(valueToCount: any, columnName?: string): number;

  diff(dfToDiff: DataFrame, columnNames: string | string[]): DataFrame;

  dim(): number[];

  distinct(columnName: string): DataFrame;

  drop(columnName: string): DataFrame;

  dropDuplicates(): DataFrame;

  filter(condition: any): DataFrame;

  find(condition: any): DataFrame;

  fullJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;

  groupBy(...columnNames: string[]): GroupedDataFrame;

  innerJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;

  join(
    dfToJoin: DataFrame,
    columnNames: string | string[],
    how?: string
  ): DataFrame;

  leftJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;

  listColumns(): string[];

  map(func: any): DataFrame;

  outerJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;

  push(...rows: Row[]): DataFrame;
  push(...rows: object[]): DataFrame;

  reduce<T>(func: ($1: T, $2: T) => T, init: T): T;

  reduceRight<T>(func: ($1: T, $2: T) => T, init: T): T;

  rename(columnName: string, replacement: string): DataFrame;

  renameAll(newColumnNames: string[]): DataFrame;

  replace(
    value: any,
    replacement: any,
    columnNames: string | string[]
  ): DataFrame;

  restructure(newColumnNames: string[]): DataFrame;

  rightJoin(dfToJoin: DataFrame, columnNames: string | string[]): DataFrame;

  sample(percentage: number): DataFrame;

  select(...columnNames: string[]): DataFrame;

  show(rows?: number, quiet?: boolean): string;

  shuffle(): DataFrame;

  sortBy(columnName: string, reverse?: boolean): DataFrame;

  toarray(columnName: string): any[];

  toCSV(header: boolean, path?: string | null): string;

  toCollection(ofRows: boolean): any[];

  toDict(): object;

  toJSON(asCollection?: boolean, path?: string | null): string;

  toText(sep?: string, header?: boolean, path?: string | null): string;

  transpose(tranposeColumnNames?: boolean | null): DataFrame;

  union(dfToUnion: DataFrame): DataFrame;

  unique(columnName: string): DataFrame;

  where(condition: any): DataFrame;

  withColumn(columnName: string, func?: any): DataFrame;

  static defaultModules: object[];

  static fromCSV(
    pathOrFile: string | File,
    header?: boolean
  ): Promise<DataFrame>;

  static fromJSON(pathOrFile: string | File): Promise<DataFrame>;

  static fromText(
    pathOrFile: string | File,
    sep?: string,
    header?: boolean
  ): Promise<DataFrame>;

  static setDefaultModules(...defaultModules: object[]): void;
}

export class Row {
  constructor(data: any[] | object | Row, columns: string[]);

  delete(columnToDel: string): Row;

  get(columnToGet: string): any;

  has(columnName: string): boolean;

  select(...columnNames: string[]): Row;

  set(columnToSet: string, value: any): Row;

  size(): number;

  toarray(): any[];

  toDict(): object;
}

export class GroupedDataFrame {
  constructor(df: DataFrame, ...columnNames: string[]);

  get(hash: any): object;

  toCollection(): object[];

  show(quiet?: boolean): string;

  listGroups(): any[];

  listHashs(): any[];

  aggregate(func: any, columnName?: string): DataFrame;

  pivot(columnToPivot: string, func?: any): DataFrame;

  melt(variableColumnName?: string, valueColumnName?: string): DataFrame;
}

export namespace DataFrame {
  class stat {
    constructor(df: DataFrame);

    sum(columnName: string): number;

    max(columnName: string): number;

    min(columnName: string): number;

    mean(columnName: string): number;

    average(columnName: string): number;

    var(columnName: string, population?: boolean): number;

    sd(columnName: string, population?: boolean): number;

    stats(columnName: string): object;
  }

  class matrix {
    constructor(df: DataFrame);

    isCommutative(df: DataFrame, reverse?: boolean): boolean;

    add(df: DataFrame): DataFrame;

    product(num: number): DataFrame;

    dot(df: DataFrame): DataFrame;
  }

  class sql {
    constructor(df: DataFrame);

    register(tableName: string, overwrite?: boolean): DataFrame;

    static dropTable(tableName: string): void;

    static dropTables(): void;

    static listTables(): string[];

    static registerTable(
      df: DataFrame,
      tablename: string,
      overwrite?: boolean
    ): void;

    static renameTable(
      tableName: string,
      replacement: string,
      overwrite?: boolean
    ): void;

    static request(query: string): any;

    static tables: {};
  }
}
