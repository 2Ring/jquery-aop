declare class Advice {
   unweave(): void;
}

declare interface PointCut {
   target: Object;
   method: string | RegExp;
}

declare class Aop {
   before: (pointCut: PointCut, advice: Function) => Advice[];
   after: (pointCut: PointCut, advice: Function) => Advice[];
   afterThrow: (pointCut: PointCut, advice: Function) => Advice[];
   afterFinally: (pointCut: PointCut, advice: Function) => Advice[];
   around: (pointCut: PointCut, advice: Function) => Advice[];
   introduction: (pointCut: PointCut, advice: Function) => Advice[];
}

interface JQueryStatic {
   aop: Aop;
}