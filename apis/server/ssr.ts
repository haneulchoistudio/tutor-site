// Use this on nodejs runtime.

import { ObjectId } from "mongodb";
import type { GetServerSidePropsContext, Redirect } from "next";

type ReturnProps<T extends Record<string, unknown>, K> = {
  props: T;
};

/** Pass an object that will return as a props object in `next.GetServerSideProps` */
function __props__<
  Props extends Record<string, unknown>,
  K extends keyof Props
>(props: Props) {
  return { props } as ReturnProps<Props, K>;
}

export { __props__ };

type RedirectProps<D extends string, P extends boolean> = {
  redirect: {
    destination: D;
    permanent: P;
  };
};

/** Returns an `next.Redirect` object corresponding to the destination `string` and permanent `boolean` passed. */
function __redirects__<ToWhere extends string>(
  destination: ToWhere,
  permanent: boolean = false
) {
  const redirect: Redirect = {
    destination,
    permanent,
  };

  return {
    redirect,
  } as RedirectProps<ToWhere, typeof permanent>;
}

export { __redirects__ };
