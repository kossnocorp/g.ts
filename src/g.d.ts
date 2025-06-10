export {};

declare global {
  /**
   * Falsy value type.
   */
  type Falsy = false | 0 | "" | null | undefined;

  /**
   * Adds undefined to all optional properties.
   */
  type Optional<Type> = {
    [Key in keyof Type]: Type[Key] extends undefined
      ? Type[Key] | undefined
      : Type[Key];
  };

  /**
   * Props type. It ensures:
   *
   * - All optional properties has undefined mixed it, so that when wrapping
   *   a component, the optional props can be passed as undefined.
   */
  type Props<Type> = Optional<Type>;

  /**
   * Maybe array type.
   */
  type MaybeArray<Type> = Type | (Type extends Type ? Type[] : never);

  /**
   * Deep required type.
   */
  type DeepRequired<Type> = {
    // [TODO] Find a way to constrain plain objects only.
    [Key in keyof Type]-?: Type[Key] extends {}
      ? Required<Type[Key]>
      : Type[Key];
  };
}
