import { useMenuSection, useSeparator } from "react-aria";
import { Node, TreeState } from "react-stately";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps<T> {
  section: Node<T>;
  state: TreeState<T>;
  onAction: ((key: React.Key) => void) | undefined;
  onClose: (() => void) | undefined;
}

export const MenuSection = <T,>(props: MenuSectionProps<T>) => {
  const { section, state, onAction, onClose } = props;
  const { itemProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const { separatorProps } = useSeparator({
    elementType: "li",
  });

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          className="border-t border-jacarta-400 -mx-2 my-4 sm:my-2"
        />
      )}
      <li {...itemProps}>
        <ul {...groupProps} className="flex flex-col gap-4 sm:gap-2">
          {[...section.childNodes].map((node) => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
              onAction={onAction}
              onClose={onClose}
            />
          ))}
        </ul>
      </li>
    </>
  );
};
